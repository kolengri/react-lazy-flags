import * as React from "react";
import type { SVGProps } from "react";
const SvgUsOr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="us-or_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#us-or_svg__a)">
      <path fill="#0052b4" d="M0 0h512v512H0Z" />
      <path
        fill="#ffda44"
        d="M167 230v37c0 68 89 89 89 89s89-21 89-89v-37zm9 170h160v48H176ZM112 64h288v48H112Z"
      />
      <path
        fill="#ffda44"
        d="M256 146a28 28 0 0 0-28 28h-84a28 28 0 0 0 28 28 28 28 0 0 0 28 28 28 28 0 0 0 28 28h56a28 28 0 0 0 28-28 28 28 0 0 0 28-28 28 28 0 0 0 28-28h-84a28 28 0 0 0-28-28"
      />
    </g>
  </svg>
);
export default SvgUsOr;
