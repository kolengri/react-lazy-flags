import * as React from "react";
import type { SVGProps } from "react";
const Jp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="jp_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#jp_svg__a)">
      <path fill="#eee" d="M0 0h512v512H0z" />
      <circle cx={256} cy={256} r={111.3} fill="#d80027" />
    </g>
  </svg>
);
export default Jp;
