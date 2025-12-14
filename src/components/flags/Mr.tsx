import * as React from "react";
import type { SVGProps } from "react";
const Mr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="mr_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#mr_svg__a)">
      <path
        fill="#d80027"
        d="M0 0h512v128l-32 128 32 128v128H0V384l32-128L0 128Z"
      />
      <path fill="#6da544" d="M0 128h512v256H0Z" />
      <path
        fill="#ffda44"
        d="m256 178-8 26h-27l22 15-9 26 22-16 22 16-9-26 22-15h-27zm-87 48-2 19a89 89 0 0 0 178 0l-2-19a89 89 0 0 1-87 70 89 89 0 0 1-87-70"
      />
    </g>
  </svg>
);
export default Mr;
