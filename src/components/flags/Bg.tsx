import * as React from "react";
import type { SVGProps } from "react";
const SvgBg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="bg_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#bg_svg__a)">
      <path
        fill="#496e2d"
        d="m0 166.9 258-31.7 254 31.7v178l-251.4 41.3L0 344.9z"
      />
      <path fill="#eee" d="M0 0h512v166.9H0z" />
      <path fill="#d80027" d="M0 344.9h512V512H0z" />
    </g>
  </svg>
);
export default SvgBg;
