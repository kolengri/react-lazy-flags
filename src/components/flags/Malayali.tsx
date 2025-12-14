import * as React from "react";
import type { SVGProps } from "react";
const Malayali = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="malayali_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#malayali_svg__a)">
      <path
        fill="#ffda44"
        d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
      />
      <path fill="#d80027" d="M0 0h512v167H0z" />
      <path fill="#338af3" d="M0 345h512v167H0z" />
    </g>
  </svg>
);
export default Malayali;
