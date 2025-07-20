import React from "react";
import { cn } from "../helper";

export type IconProps = React.SVGProps<SVGSVGElement>;

const CheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9421 0.303711C25.748 0.303711 28.9661 3.67775 28.9661 8.69629V20.28C28.9661 25.283 25.748 28.657 20.9421 28.657H8.65095C3.84507 28.657 0.612793 25.283 0.612793 20.28V8.69629C0.612793 3.67775 3.84507 0.303711 8.65095 0.303711H20.9421ZM20.7153 10.2274C20.2333 9.74536 19.4394 9.74536 18.9574 10.2274L13.1024 16.0823L10.6215 13.6014C10.1395 13.1194 9.34561 13.1194 8.8636 13.6014C8.3816 14.0834 8.3816 14.8631 8.8636 15.3593L12.2376 18.7192C12.4786 18.9602 12.7905 19.0736 13.1024 19.0736C13.4285 19.0736 13.7404 18.9602 13.9814 18.7192L20.7153 11.9853C21.1973 11.5033 21.1973 10.7235 20.7153 10.2274Z"
        fill="#FF9879"
      />
    </svg>
  )
);

CheckIcon.displayName = "CheckIcon";
export default CheckIcon;
