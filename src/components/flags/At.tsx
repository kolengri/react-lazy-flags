import * as React from "react";
import type { SVGProps } from "react";
const At = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="at_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#at_svg__a)">
      <path
        fill="#d80027"
        d="M0 0h512v167l-23.2 89.7L512 345v167H0V345l29.4-89L0 167z"
      />
      <path fill="#eee" d="M0 167h512v178H0z" />
    </g>
  </svg>
);
export default At;
