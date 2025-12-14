import * as React from "react";
import type { SVGProps } from "react";
const TzZanzibar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="tz-zanzibar_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#tz-zanzibar_svg__a)">
      <path fill="#338af3" d="M512 0v170H0V0z" />
      <path fill="#ffda44" d="M200 0 0 132v38h56L256 38V0z" />
      <path fill="#333" d="M512 170v172H0V170zM222 0 0 148v22h34L256 22V0z" />
      <path fill="#6da544" d="M512 342v170H0V342zM0 132V0h200z" />
    </g>
  </svg>
);
export default TzZanzibar;
