import * as React from "react";
import type { SVGProps } from "react";
const Mm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="mm_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#mm_svg__a)">
      <path
        fill="#6da544"
        d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
      />
      <path fill="#ffda44" d="M0 0h512v167H0z" />
      <path fill="#d80027" d="M0 345h512v167H0z" />
      <path
        fill="#eee"
        d="M431.5 216.5h-134L256 89l-41.4 127.6h-134l108.3 78.8L147.5 423 256 345l108.5 78-41.4-127.6z"
      />
    </g>
  </svg>
);
export default Mm;
