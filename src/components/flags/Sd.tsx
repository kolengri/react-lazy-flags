import * as React from "react";
import type { SVGProps } from "react";
const SvgSd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="sd_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#sd_svg__a)">
      <path fill="#eee" d="M43.6 109.4 512 144.7v222.6L43.8 397.2z" />
      <path fill="#d80027" d="M0 0h512v144.7H111z" />
      <path fill="#333" d="M111 367.3h401V512H0z" />
      <path fill="#496e2d" d="M0 0v512l256-256z" />
    </g>
  </svg>
);
export default SvgSd;
