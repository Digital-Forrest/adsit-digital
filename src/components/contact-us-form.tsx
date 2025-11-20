'use client';

import { useState, useEffect } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  turnstile?: string;
}

// Extend Window interface for Turnstile types
declare global {
  interface Window {
    turnstile?: {
      reset: (widgetId?: string) => void;
    };
  }
}

export function ContactUsForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  // Handle Turnstile token callback
  useEffect(() => {
    // Set up global callback function for Turnstile
    (window as any).onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
      // Clear any Turnstile errors when token is received
      setErrors((prev) => ({ ...prev, turnstile: undefined }));
    };

    (window as any).onTurnstileError = () => {
      setTurnstileToken(null);
      setErrors((prev) => ({ ...prev, turnstile: 'Turnstile verification failed. Please try again.' }));
    };

    (window as any).onTurnstileExpired = () => {
      setTurnstileToken(null);
      setErrors((prev) => ({ ...prev, turnstile: 'Turnstile verification expired. Please verify again.' }));
    };

    // Cleanup
    return () => {
      delete (window as any).onTurnstileSuccess;
      delete (window as any).onTurnstileError;
      delete (window as any).onTurnstileExpired;
    };
  }, []);

  // Client-side validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number format';
      }
    }

    // Validate Turnstile token
    if (!turnstileToken) {
      newErrors.turnstile = 'Please complete the verification challenge';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string; error?: string };

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! We\'ll be in touch soon.',
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        // Reset Turnstile widget
        if (window.turnstile) {
          window.turnstile.reset();
        }
        setTurnstileToken(null);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit your information. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields - Side by Side */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold mb-2 subtle-copy"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.firstName
                ? 'border-red-500'
                : 'border-[color:var(--border-glass)]'
            } bg-[color:var(--bg-glass)] text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] transition-colors`}
            disabled={isSubmitting}
            required
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold mb-2 subtle-copy"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.lastName
                ? 'border-red-500'
                : 'border-[color:var(--border-glass)]'
            } bg-[color:var(--bg-glass)] text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] transition-colors`}
            disabled={isSubmitting}
            required
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold mb-2 subtle-copy"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email
              ? 'border-red-500'
              : 'border-[color:var(--border-glass)]'
          } bg-[color:var(--bg-glass)] text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] transition-colors`}
          disabled={isSubmitting}
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone and Company - Side by Side */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold mb-2 subtle-copy"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone
                ? 'border-red-500'
                : 'border-[color:var(--border-glass)]'
            } bg-[color:var(--bg-glass)] text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] transition-colors`}
            disabled={isSubmitting}
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold mb-2 subtle-copy"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-[color:var(--border-glass)] bg-[color:var(--bg-glass)] text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] transition-colors"
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold mb-2 subtle-copy"
        >
          Tell us about your goals
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-[color:var(--border-glass)] bg-[color:var(--bg-glass)] text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] transition-colors resize-none"
          disabled={isSubmitting}
          placeholder="What are you looking to achieve? What challenges are you facing?"
        />
      </div>

      {/* Turnstile Widget */}
      <div>
        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          data-callback="onTurnstileSuccess"
          data-error-callback="onTurnstileError"
          data-expired-callback="onTurnstileExpired"
        />
        {errors.turnstile && (
          <p className="mt-1 text-sm text-red-500">{errors.turnstile}</p>
        )}
      </div>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-500/20 border border-green-500/50'
              : 'bg-red-500/20 border border-red-500/50'
          }`}
        >
          <p
            className={`text-sm font-semibold ${
              submitStatus.type === 'success'
                ? 'text-green-400'
                : 'text-red-400'
            }`}
          >
            {submitStatus.message}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="brand-button w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

