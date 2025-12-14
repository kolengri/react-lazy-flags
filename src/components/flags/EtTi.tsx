import * as React from "react";
import type { SVGProps } from "react";
const EtTi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="et-ti_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#et-ti_svg__a)">
      <path fill="#d80027" d="M0 0h512v512H0l64-256Z" />
      <path
        fill="#ffda44"
        d="M0 0v512l256-256Zm404 168v176L300 202l168 54-168 54Z"
      />
    </g>
  </svg>
);
export default EtTi;
