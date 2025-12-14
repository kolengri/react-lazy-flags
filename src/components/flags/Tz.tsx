import * as React from "react";
import type { SVGProps } from "react";
const Tz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="tz_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#tz_svg__a)">
      <path fill="#ffda44" d="M399 0 0 399v45l68 68h45l399-399V68L444 0z" />
      <path fill="#333" d="M444 0 0 444v68h68L512 68V0z" />
      <path fill="#338af3" d="m113 512 399-399v399z" />
      <path fill="#6da544" d="M0 399V0h399z" />
    </g>
  </svg>
);
export default Tz;
