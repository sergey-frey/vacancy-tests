import { SVGAttributes } from "react";

export const OkIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.3333 2L4.99996 9.33333L1.66663 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};
