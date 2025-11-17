"use client";

import { useState } from "react";
import { QuoteModal } from "./quote-modal";

interface QuoteButtonProps {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  variant?: "default" | "ghost";
}

export function QuoteButton({
  children,
  className = "",
  "aria-label": ariaLabel,
  variant = "default",
}: QuoteButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonClasses =
    variant === "ghost"
      ? `brand-button ${className}`
      : `brand-button ${className}`;

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        aria-label={ariaLabel}
        className={buttonClasses}
        data-variant={variant === "ghost" ? "ghost" : undefined}
      >
        {children}
      </button>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

