import * as React from "react";
import type { SVGProps } from "react";
const Bs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="bs_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#bs_svg__a)">
      <path fill="#338af3" d="M0 0h512v167l-37.4 89 37.4 89v167H0l49.6-252z" />
      <path fill="#ffda44" d="M108.3 167H512v178H108.3z" />
      <path fill="#333" d="M0 0v512l256-256z" />
    </g>
  </svg>
);
export default Bs;
