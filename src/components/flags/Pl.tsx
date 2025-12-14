import * as React from "react";
import type { SVGProps } from "react";
const SvgPl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="pl_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#pl_svg__a)">
      <path fill="#d80027" d="m0 256 256.4-44.3L512 256v256H0z" />
      <path fill="#eee" d="M0 0h512v256H0z" />
    </g>
  </svg>
);
export default SvgPl;
