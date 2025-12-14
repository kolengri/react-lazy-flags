import * as React from "react";
import type { SVGProps } from "react";
const Am = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="am_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#am_svg__a)">
      <path fill="#0052b4" d="m0 171 256-32 256 32v170l-256 32L0 341Z" />
      <path fill="#d80027" d="M0 0h512v171H0Z" />
      <path fill="#ff9811" d="M0 341h512v171H0Z" />
    </g>
  </svg>
);
export default Am;
