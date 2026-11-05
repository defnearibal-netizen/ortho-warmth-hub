import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RdvDialog from "@/components/shared/RdvDialog";
import { RdvButton } from "@/components/shared/RdvButton";
import {
  PHONE_PRIMARY,
  RDV_PLATFORM_LINK,
  WHATSAPP_LINK,
} from "@/lib/rdv";

describe("booking choice", () => {
  it("keeps the WhatsApp number and the OrthoAdvance portal the user gave", () => {
    expect(WHATSAPP_LINK).toBe("https://wa.me/2250575430000");
    expect(RDV_PLATFORM_LINK).toBe(
      "https://aribal-portail.orthoadvance.com/#/cabinets/aribal",
    );
    expect(PHONE_PRIMARY).toBe("+225 05 75 43 00 00");
  });

  it("offers both destinations, each opening in a new tab", () => {
    render(<RdvDialog open onOpenChange={() => {}} />);

    const whatsapp = screen.getByRole("link", { name: /WhatsApp/i });
    const platform = screen.getByRole("link", { name: /Plateforme de réservation/i });

    expect(whatsapp).toHaveAttribute("href", WHATSAPP_LINK);
    expect(platform).toHaveAttribute("href", RDV_PLATFORM_LINK);

    for (const link of [whatsapp, platform]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("opens the choice instead of going straight to one link", () => {
    render(<RdvButton variant="cta">Prendre RDV</RdvButton>);

    expect(screen.queryByRole("link", { name: /WhatsApp/i })).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Prendre RDV" }));

    expect(screen.getByRole("link", { name: /WhatsApp/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Plateforme de réservation/i }),
    ).toBeInTheDocument();
  });
});
