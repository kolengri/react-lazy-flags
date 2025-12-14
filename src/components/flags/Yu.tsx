import * as React from "react";
import type { SVGProps } from "react";
const SvgYu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="yu_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#yu_svg__a)">
      <path fill="#eee" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
      <path fill="#d80027" d="M0 345h512v167H0Z" />
      <path fill="#0052b4" d="M0 0h512v167H0Z" />
      <path fill="#ffda44" d="m137 413 309-222H66l309 222L256 51Z" />
      <path fill="#d80027" d="m183 350 189-136H140l188 136-72-221z" />
    </g>
  </svg>
);
export default SvgYu;
