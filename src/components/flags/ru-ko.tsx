import * as React from "react";
import type { SVGProps } from "react";
const SvgRuKo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ru-ko_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ru-ko_svg__a)">
      <path fill="#6da544" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
      <path fill="#eee" d="M0 345h512v167H0Z" />
      <path fill="#0052b4" d="M0 0h512v167H0Z" />
    </g>
  </svg>
);
export default SvgRuKo;
