import * as React from "react";
import type { SVGProps } from "react";
const Ewe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ewe_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ewe_svg__a)">
      <path fill="#d80027" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
      <path fill="#6da544" d="M0 0h512v167H0zm0 345h512v167H0z" />
      <path
        fill="#ffda44"
        d="m110 200 36 112-95-69h117l-94 69zm146 0 36 112-94-69h117l-95 69zm146 0 36 112-94-69h117l-95 69z"
      />
    </g>
  </svg>
);
export default Ewe;
