import { render, screen } from "@testing-library/react";

import { SiteFooter } from "@/components/site-footer";

describe("SiteFooter", () => {
  it("links to the company's social profiles", () => {
    render(<SiteFooter />);

    const socialNames = ["Instagram", "Facebook", "LinkedIn"];

    socialNames.forEach((social) => {
      expect(
        screen.getByRole("link", { name: new RegExp(social, "i") }),
      ).toBeInTheDocument();
    });
  });

  it("exposes legal navigation", () => {
    render(<SiteFooter />);

    expect(
      screen.getByRole("link", { name: /read the privacy policy/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /read the terms and conditions/i }),
    ).toBeInTheDocument();
  });
});

