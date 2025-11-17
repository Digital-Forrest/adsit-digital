'use client';

import { useState } from 'react';
import PageBrand from '@/components/page-brand';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export default function TestFormPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const response = await fetch('/api/test-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Contact created successfully in GHL!',
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to create contact. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageBrand brand="dark-blue" />
      <div data-brand="dark-blue" className="page-surface py-24">
        <div className="container relative flex w-full max-w-2xl flex-col gap-8">
          <header className="space-y-4">
            <h1 className="gradient-heading text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              GHL Form Integration Test
            </h1>
            <p className="subtle-copy text-base">
              This is a test form to verify GoHighLevel API integration. Submissions will create contacts in your GHL account.
            </p>
          </header>

          <div className="glass-panel space-y-6 p-6" data-tone="subtle">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
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
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.firstName
                      ? 'border-red-500'
                      : 'border-[color:var(--border-glass)]'
                  } bg-[color:var(--bg-glass)] text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]`}
                  disabled={isSubmitting}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
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
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.lastName
                      ? 'border-red-500'
                      : 'border-[color:var(--border-glass)]'
                  } bg-[color:var(--bg-glass)] text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]`}
                  disabled={isSubmitting}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                )}
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
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-[color:var(--border-glass)]'
                  } bg-[color:var(--bg-glass)] text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2 subtle-copy"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.phone
                      ? 'border-red-500'
                      : 'border-[color:var(--border-glass)]'
                  } bg-[color:var(--bg-glass)] text-[color:var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]`}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
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
                className="w-full px-6 py-3 rounded-lg bg-[color:var(--brand-primary)] text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {isSubmitting ? 'Submitting...' : 'Submit to GHL'}
              </button>
            </form>
          </div>

          <div className="glass-panel p-4" data-tone="subtle">
            <p className="text-xs subtle-copy">
              <strong>Note:</strong> This is a test page. After verifying the integration works correctly, this page can be removed or restricted.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

