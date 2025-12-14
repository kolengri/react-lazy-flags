import * as React from "react";
import type { SVGProps } from "react";
const Cg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="cg_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#cg_svg__a)">
      <path fill="#ffda44" d="M384 0h128v128L352 352 128 512H0V384l160-224Z" />
      <path fill="#6da544" d="M0 384 384 0H0Z" />
      <path fill="#d80027" d="M512 128 128 512h384z" />
    </g>
  </svg>
);
export default Cg;
