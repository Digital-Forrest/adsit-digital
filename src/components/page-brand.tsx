"use client";

import { useEffect } from "react";

type BrandTone = "light-blue" | "purple" | "dark-blue" | "orange" | "yellow" | "black";

/**
 * PageBrand synchronises the active brand palette with the document-level data attributes.
 * This keeps the header, footer, and shared surfaces aligned with each page's Liquid Glass
 * treatment. Theme is managed globally by ThemeProvider, so this component only handles brand colors.
 *
 * The component is intentionally lightweight: it updates the <html> and <body> data attributes on
 * mount and restores the previous values when the user navigates away. Extend the union type above
 * if additional brand palettes are introduced.
 */
export function PageBrand({ brand }: { brand: BrandTone }) {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousBrand = root.dataset.brand ?? "light-blue";

    root.dataset.brand = brand;
    body.dataset.brand = brand;

    return () => {
      root.dataset.brand = previousBrand;
      body.dataset.brand = previousBrand;
    };
  }, [brand]);

  return null;
}

