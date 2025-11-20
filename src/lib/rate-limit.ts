import { NextRequest, NextResponse } from 'next/server';

/**
 * Rate limit configuration options
 */
export interface RateLimitOptions {
  /**
   * Maximum number of requests allowed within the window
   * @default 10
   */
  maxRequests?: number;
  /**
   * Time window in milliseconds
   * @default 60000 (1 minute)
   */
  windowMs?: number;
  /**
   * Custom error message when rate limit is exceeded
   * @default 'Too many requests. Please try again later.'
   */
  errorMessage?: string;
}

/**
 * Rate limit entry tracking request count and timestamp
 */
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

/**
 * In-memory store for rate limiting
 * In production with multiple workers, consider using Cloudflare KV or Durable Objects
 */
const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Clean up expired entries periodically to prevent memory leaks
 */
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 60000); // Clean up every minute

/**
 * Get client identifier from request (IP address)
 */
function getClientIdentifier(request: NextRequest): string {
  // Cloudflare provides CF-Connecting-IP header
  const ip =
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    request.headers.get('X-Real-IP') ||
    'unknown';

  return ip;
}

/**
 * Standardized rate limiting middleware for API routes
 * 
 * @param request - Next.js request object
 * @param options - Rate limit configuration options
 * @returns NextResponse with rate limit headers, or null if request should proceed
 * 
 * @example
 * ```ts
 * export async function POST(request: NextRequest) {
 *   const rateLimitResponse = await rateLimit(request, {
 *     maxRequests: 5,
 *     windowMs: 60000, // 1 minute
 *   });
 *   
 *   if (rateLimitResponse) {
 *     return rateLimitResponse;
 *   }
 *   
 *   // Continue with request handling...
 * }
 * ```
 */
export async function rateLimit(
  request: NextRequest,
  options: RateLimitOptions = {}
): Promise<NextResponse | null> {
  const {
    maxRequests = 10,
    windowMs = 60000, // 1 minute default
    errorMessage = 'Too many requests. Please try again later.',
  } = options;

  const clientId = getClientIdentifier(request);
  const now = Date.now();
  const entry = rateLimitStore.get(clientId);

  // Check if entry exists and is still within the window
  if (entry && now < entry.resetTime) {
    // Increment request count
    entry.count++;

    // Check if rate limit exceeded
    if (entry.count > maxRequests) {
      const retryAfter = Math.ceil((entry.resetTime - now) / 1000);

      return NextResponse.json(
        {
          success: false,
          error: errorMessage,
        },
        {
          status: 429,
          headers: {
            'Retry-After': retryAfter.toString(),
            'X-RateLimit-Limit': maxRequests.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(entry.resetTime).toISOString(),
          },
        }
      );
    }

    // Request allowed, headers will be added in addRateLimitHeaders()
    return null;
  }

  // Create new entry or reset expired entry
  rateLimitStore.set(clientId, {
    count: 1,
    resetTime: now + windowMs,
  });

  return null; // Request allowed
}

/**
 * Add rate limit headers to a successful response
 * Call this after rateLimit() returns null
 */
export function addRateLimitHeaders(
  response: NextResponse,
  request: NextRequest,
  options: RateLimitOptions = {}
): NextResponse {
  const { maxRequests = 10 } = options;
  const clientId = getClientIdentifier(request);
  const entry = rateLimitStore.get(clientId);

  if (entry) {
    const remaining = Math.max(0, maxRequests - entry.count);
    response.headers.set('X-RateLimit-Limit', maxRequests.toString());
    response.headers.set('X-RateLimit-Remaining', remaining.toString());
    response.headers.set('X-RateLimit-Reset', new Date(entry.resetTime).toISOString());
  }

  return response;
}

// Cleanup on process exit (for development)
if (typeof process !== 'undefined') {
  process.on('exit', () => {
    clearInterval(cleanupInterval);
  });
}

