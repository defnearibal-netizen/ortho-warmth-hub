import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import RdvDialog from "@/components/shared/RdvDialog";

/**
 * Button that opens the "WhatsApp or online platform" choice dialog
 * instead of jumping straight to one of the two.
 */
export const RdvButton = ({
  children,
  ...buttonProps
}: Omit<ButtonProps, "onClick" | "asChild">) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button {...buttonProps} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <RdvDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

interface RdvLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/** Same choice dialog, triggered by a plain text link. */
export const RdvLink = ({ children, className, ...props }: RdvLinkProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} {...props}>
        {children}
      </button>
      <RdvDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default RdvButton;
