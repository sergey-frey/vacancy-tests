import { SVGAttributes } from "react";

export const ClockIcon = ({ ...props }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3334 6.00002C12.3334 9.22168 9.72174 11.8334 6.50008 11.8334C3.27842 11.8334 0.666748 9.22168 0.666748 6.00002C0.666748 2.77836 3.27842 0.166687 6.50008 0.166687C9.72174 0.166687 12.3334 2.77836 12.3334 6.00002ZM7.14591 2.50002C7.14591 2.14334 6.85677 1.85419 6.50008 1.85419C6.1434 1.85419 5.85425 2.14334 5.85425 2.50002V6.00002C5.85425 6.24464 5.99246 6.46827 6.21126 6.57767L8.54459 7.74434C8.86362 7.90385 9.25155 7.77454 9.41107 7.45551C9.57058 7.13648 9.44127 6.74855 9.12224 6.58904L7.14591 5.60087V2.50002Z"
        fill="#A1A1AA"
      />
      <clipPath id="clip0_2002_436">
        <rect width="12" height="12" fill="white" transform="translate(0.5)" />
      </clipPath>
    </svg>
  );
};
