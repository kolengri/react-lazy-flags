import * as React from "react";
import type { SVGProps } from "react";
const Ic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ic_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ic_svg__a)">
      <path fill="#338af3" d="M167 0h178l32.3 257L345 512H167l-25.3-256z" />
      <path fill="#eee" d="M0 0h166.9v512H0z" />
      <path fill="#ffda44" d="M344.9 0H512v512H344.9z" />
    </g>
  </svg>
);
export default Ic;
