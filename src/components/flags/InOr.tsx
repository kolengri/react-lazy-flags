import * as React from "react";
import type { SVGProps } from "react";
const InOr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="in-or_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#in-or_svg__a)">
      <path fill="#ffda44" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <path fill="#d80027" d="M0 0h512v160H0Z" />
      <path fill="#eee" d="M0 352h512v160H0Z" />
    </g>
  </svg>
);
export default InOr;
