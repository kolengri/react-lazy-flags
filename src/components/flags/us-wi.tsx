import * as React from "react";
import type { SVGProps } from "react";
const SvgUsWi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="us-wi_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#us-wi_svg__a)">
      <path fill="#0052b4" d="M0 0h512v512H0z" />
      <path fill="#ffda44" d="M167 156v111c0 68 89 89 89 89s89-21 89-89V156Z" />
      <path fill="#eee" d="M112 64h288v48H112Zm64 336h160v48H176Z" />
    </g>
  </svg>
);
export default SvgUsWi;
