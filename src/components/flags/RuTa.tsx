import * as React from "react";
import type { SVGProps } from "react";
const RuTa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ru-ta_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ru-ta_svg__a)">
      <path fill="#eee" d="m0 224 256-32 256 32v64l-256 32L0 288Z" />
      <path fill="#496e2d" d="M0 0h512v224H0z" />
      <path fill="#d80027" d="M0 288h512v224H0z" />
    </g>
  </svg>
);
export default RuTa;
