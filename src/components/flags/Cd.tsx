import * as React from "react";
import type { SVGProps } from "react";
const SvgCd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="cd_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#cd_svg__a)">
      <path fill="#338af3" d="M0 0h401.9L512 110.3V512H110.3L0 401.9z" />
      <path
        fill="#ffda44"
        d="M401.9 0 0 401.9V449l63 63h47.3L512 110.3V63L449 0z"
      />
      <path fill="#d80027" d="M449 0 0 449v63h63L512 63V0z" />
      <path
        fill="#ffda44"
        d="m136.4 78 13.8 42.4H195l-36 26.3 13.7 42.5-36.2-26.3-36 26.3 13.7-42.5L78 120.4h44.7z"
      />
    </g>
  </svg>
);
export default SvgCd;
