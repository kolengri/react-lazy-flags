import * as React from "react";
import type { SVGProps } from "react";
const SvgBf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="bf_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#bf_svg__a)">
      <path fill="#d80027" d="M0 0h512v256l-255.2 48L0 256z" />
      <path fill="#6da544" d="M0 256h512v256H0z" />
      <path
        fill="#ffda44"
        d="m256 167 19.3 59.5H338l-50.6 36.8 19.3 59.5L256 286l-50.6 36.8 19.3-59.5-50.6-36.8h62.6z"
      />
    </g>
  </svg>
);
export default SvgBf;
