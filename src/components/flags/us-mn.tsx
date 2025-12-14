import * as React from "react";
import type { SVGProps } from "react";
const SvgUsMn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="us-mn_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#us-mn_svg__a)">
      <path fill="#026" d="M0 0h352v512H0z" />
      <path fill="#338af3" d="M352 512h160V0H352L224 256Z" />
      <path
        fill="#eee"
        d="m112 176 17 40 40-17-17 40 40 17-40 17 17 40-40-17-17 40-17-40-40 17 17-40-40-17 40-17-17-40 40 17z"
      />
    </g>
  </svg>
);
export default SvgUsMn;
