import { SVGAttributes } from "react";

export const PowerIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
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
        d="M8.66667 1.33334L2 9.33334H8L7.33333 14.6667L14 6.66667H8L8.66667 1.33334Z"
        stroke="#8462EE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
