import * as React from "react";
import type { SVGProps } from "react";
const SvgUa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ua_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ua_svg__a)">
      <path fill="#ffda44" d="m0 256 258-39.4L512 256v256H0z" />
      <path fill="#338af3" d="M0 0h512v256H0z" />
    </g>
  </svg>
);
export default SvgUa;
