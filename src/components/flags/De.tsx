import * as React from "react";
import type { SVGProps } from "react";
const De = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="de_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#de_svg__a)">
      <path fill="#ffda44" d="m0 345 256.7-25.5L512 345v167H0z" />
      <path fill="#d80027" d="m0 167 255-23 257 23v178H0z" />
      <path fill="#333" d="M0 0h512v167H0z" />
    </g>
  </svg>
);
export default De;
