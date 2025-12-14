import * as React from "react";
import type { SVGProps } from "react";
const SvgBo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="bo_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#bo_svg__a)">
      <path
        fill="#ffda44"
        d="m0 167 252.9-29.3L512 167v178l-255.7 25.7L0 345z"
      />
      <path fill="#d80027" d="M0 0h512v167H0z" />
      <path fill="#6da544" d="M0 345h512v167H0z" />
    </g>
  </svg>
);
export default SvgBo;
