import { SVGAttributes } from "react";

export const CrossIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.00012 12.75L12.7501 3L13.8108 4.06066L4.06078 13.8107L3.00012 12.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.75 13.8107L3.00001 4.06066L4.06067 3L13.8107 12.75L12.75 13.8107Z"
        fill="currentColor"
      />
    </svg>
  );
};
