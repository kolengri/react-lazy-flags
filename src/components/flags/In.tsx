import * as React from "react";
import type { SVGProps } from "react";
const SvgIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="in_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#in_svg__a)">
      <path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352z" />
      <path fill="#ff9811" d="M0 0h512v160H0Z" />
      <path fill="#6da544" d="M0 352h512v160H0Z" />
      <circle cx={256} cy={256} r={72} fill="#0052b4" />
      <circle cx={256} cy={256} r={48} fill="#eee" />
      <circle cx={256} cy={256} r={24} fill="#0052b4" />
    </g>
  </svg>
);
export default SvgIn;
