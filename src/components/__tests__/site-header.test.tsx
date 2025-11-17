import { render, screen } from "@testing-library/react";

import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/contexts/theme-context";

describe("SiteHeader", () => {
  it("renders the brand logo with descriptive alt text", () => {
    render(
      <ThemeProvider>
        <SiteHeader />
      </ThemeProvider>
    );

    const logo = screen.getByRole("img", { name: /adsit digital logo/i });
    expect(logo).toBeInTheDocument();
  });

  it("exposes all primary navigation links with accessible labels", () => {
    render(
      <ThemeProvider>
        <SiteHeader />
      </ThemeProvider>
    );

    const navLinks = [
      /navigate to how it works/i,
      /navigate to services/i,
      /navigate to about us/i,
      /navigate to contact us/i,
      /navigate to blog resources/i,
    ];

    navLinks.forEach((accessibleName) => {
      expect(screen.getByRole("link", { name: accessibleName })).toBeInTheDocument();
    });
  });
});

