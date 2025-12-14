import * as React from "react";
import type { SVGProps } from "react";
const SvgCi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ci_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ci_svg__a)">
      <path fill="#eee" d="M167 0h178l31 253.2L345 512H167l-33.4-257.4z" />
      <path fill="#ff9811" d="M0 0h167v512H0z" />
      <path fill="#6da544" d="M345 0h167v512H345z" />
    </g>
  </svg>
);
export default SvgCi;
