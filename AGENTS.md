# AGENTS.md

## Rules

- Appointment CTAs ("Prendre RDV", "Prendre rendez-vous", "1ère consultation") must open the WhatsApp-or-online-platform choice dialog via `RdvButton` / `RdvLink` (`src/components/shared/RdvButton.tsx`); never link such a CTA straight to one destination.
- Keep the booking destinations (WhatsApp number, online portal URL, phone) in one place, `src/lib/rdv.ts`, so they can be changed without touching pages.
