"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  useEffect(() => {
    // Load the script when modal opens (only if not already loaded)
    if (isOpen) {
      const existingScript = document.querySelector(
        'script[src="https://services.leadconnectorhq.com/prospecting/client/widget_script.js"]'
      );
      
      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://services.leadconnectorhq.com/prospecting/client/widget_script.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    // Handle ESC key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div
        className="glass-panel relative z-10 w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-brand-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 glass-panel flex h-10 w-10 items-center justify-center rounded-full transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-primary)]"
          aria-label="Close modal"
        >
          <span className="text-xl">×</span>
        </button>

        {/* Form iframe */}
        <div className="overflow-auto max-h-[90vh]">
          <iframe
            id="prospecting-widget"
            src="https://services.leadconnectorhq.com/prospecting/widgets/load/69136c44fc728e1ec496d56c"
            frameBorder="0"
            style={{ display: "block", width: "100%", minHeight: "600px" }}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );

  // Use portal to render modal at document root to avoid stacking context issues
  if (typeof document !== "undefined") {
    return createPortal(modalContent, document.body);
  }

  return null;
}

