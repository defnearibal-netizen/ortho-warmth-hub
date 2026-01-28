import { SVGProps } from "react";

interface ToothSparkleProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const ToothSparkle = ({ size = 24, className, ...props }: ToothSparkleProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Tooth shape */}
      <path d="M12 2C9.5 2 7.5 3.5 6.5 5C5.5 6.5 5 8 5 10C5 12 5.5 14 6 16C6.5 18 7 20 7.5 21.5C7.7 22.2 8.3 22.5 9 22.5C9.7 22.5 10.3 22 10.5 21.5L11 19C11.3 18 11.6 17 12 17C12.4 17 12.7 18 13 19L13.5 21.5C13.7 22 14.3 22.5 15 22.5C15.7 22.5 16.3 22.2 16.5 21.5C17 20 17.5 18 18 16C18.5 14 19 12 19 10C19 8 18.5 6.5 17.5 5C16.5 3.5 14.5 2 12 2Z" />
      {/* Shine on tooth */}
      <path d="M8 6C8.5 5 9.5 4.5 10 4.5" />
      
      {/* Sparkle top right */}
      <path d="M18 3L18.5 4.5L20 5L18.5 5.5L18 7L17.5 5.5L16 5L17.5 4.5L18 3Z" />
      
      {/* Sparkle bottom left */}
      <path d="M4 12L4.3 13L5.3 13.3L4.3 13.6L4 14.6L3.7 13.6L2.7 13.3L3.7 13L4 12Z" />
      
      {/* Small sparkle */}
      <path d="M20 9L20.2 9.6L20.8 9.8L20.2 10L20 10.6L19.8 10L19.2 9.8L19.8 9.6L20 9Z" />
    </svg>
  );
};

export default ToothSparkle;
