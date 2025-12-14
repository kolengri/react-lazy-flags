import * as React from "react";
import type { SVGProps } from "react";
const SvgSn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="sn_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#sn_svg__a)">
      <path fill="#ffda44" d="M144.8 0h222.4l32 260-32 252H144.8l-32.1-256z" />
      <path fill="#496e2d" d="M0 0h144.8v512H0z" />
      <path fill="#d80027" d="M367.2 0H512v512H367.2z" />
      <path
        fill="#496e2d"
        d="m256.1 167 22.1 68h71.5L292 277l22 68-57.8-42-57.9 42 22.1-68-57.8-42H234z"
      />
    </g>
  </svg>
);
export default SvgSn;
