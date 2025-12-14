import * as React from "react";
import type { SVGProps } from "react";
const Bd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="bd_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#bd_svg__a)">
      <path fill="#496e2d" d="M0 0h512v512H0z" />
      <circle cx={200.3} cy={256} r={111.3} fill="#d80027" />
    </g>
  </svg>
);
export default Bd;
