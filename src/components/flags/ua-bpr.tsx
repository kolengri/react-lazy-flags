import * as React from "react";
import type { SVGProps } from "react";
const SvgUaBpr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ua-bpr_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ua-bpr_svg__a)">
      <path fill="#ffda44" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
      <path fill="#338af3" d="M0 0h512v167H0z" />
      <path fill="#333" d="M0 345h512v167H0z" />
    </g>
  </svg>
);
export default SvgUaBpr;
