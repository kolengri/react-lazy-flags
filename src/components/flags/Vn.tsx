import * as React from "react";
import type { SVGProps } from "react";
const SvgVn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="vn_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#vn_svg__a)">
      <path fill="#d80027" d="M0 0h512v512H0Z" />
      <path fill="#ffda44" d="m176 378 208-150H128l208 150-80-244Z" />
    </g>
  </svg>
);
export default SvgVn;
