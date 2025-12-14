import * as React from "react";
import type { SVGProps } from "react";
const Fx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="fx_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#fx_svg__a)">
      <path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" />
      <path fill="#0052b4" d="M0 0h167v512H0z" />
      <path fill="#d80027" d="M345 0h167v512H345z" />
    </g>
  </svg>
);
export default Fx;
