import * as React from "react";
import type { SVGProps } from "react";
const RuLpr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ru-lpr_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ru-lpr_svg__a)">
      <path fill="#0052b4" d="M512 170v172l-256 32L0 342V170l256-32z" />
      <path fill="#338af3" d="M512 0v170H0V0Z" />
      <path fill="#d80027" d="M512 342v170H0V342Z" />
    </g>
  </svg>
);
export default RuLpr;
