import { CalendarCheck, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  PHONE_PRIMARY,
  RDV_PLATFORM_LINK,
  WHATSAPP_LINK,
} from "@/lib/rdv";

interface RdvDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const options = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: `Écrivez-nous directement au ${PHONE_PRIMARY}`,
    href: WHATSAPP_LINK,
    icon: MessageCircle,
    iconClass: "bg-[#25D366]/10 text-[#128C7E]",
    ringClass: "hover:border-[#25D366]/50 hover:bg-[#25D366]/5",
  },
  {
    id: "platform",
    title: "Plateforme de réservation",
    description: "Choisissez un créneau en ligne sur notre portail",
    href: RDV_PLATFORM_LINK,
    icon: CalendarCheck,
    iconClass: "bg-cta/10 text-cta-hover",
    ringClass: "hover:border-cta/50 hover:bg-cta/5",
  },
];

const RdvDialog = ({ open, onOpenChange }: RdvDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <DialogHeader className="text-center">
          <DialogTitle
            className="text-2xl font-normal text-foreground"
            style={{ fontFamily: "'Tenor Sans', serif" }}
          >
            Comment souhaitez-vous prendre rendez-vous ?
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Choisissez le moyen qui vous convient le mieux.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 pt-2">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <a
                key={option.id}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onOpenChange(false)}
                className={`flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-4 text-left transition-colors duration-200 ${option.ringClass}`}
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${option.iconClass}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-base font-medium text-foreground">
                    {option.title}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {option.description}
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        <p className="pt-1 text-center text-xs text-muted-foreground">
          Le lien s'ouvre dans un nouvel onglet.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default RdvDialog;
