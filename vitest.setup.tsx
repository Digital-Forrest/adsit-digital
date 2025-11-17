import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";
import "@testing-library/jest-dom/vitest";

// Simplify Next.js <Link> so React Testing Library can render components without Next routing.
vi.mock("next/link", () => {
  const MockLink = forwardRef<
    HTMLAnchorElement,
    AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
  >(({ href, ...props }, ref) => (
    <a ref={ref} href={href} {...props} />
  ));

  MockLink.displayName = "MockNextLink";

  return {
    __esModule: true,
    default: MockLink,
  };
});

// Mock Next.js <Image> to a plain <img> element for predictable testing behaviour.
vi.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    priority: _priority,
    loader: _loader,
    fill: _fill,
    ...props
  }: {
    src: string | { src: string };
    alt: string;
    priority?: boolean;
    loader?: unknown;
    fill?: boolean;
    [key: string]: unknown;
  }) => {
    const imageSrc = typeof src === "string" ? src : src?.src ?? "";

    // eslint-disable-next-line @next/next/no-img-element
    return <img src={imageSrc} alt={alt} {...props} />;
  },
}));

