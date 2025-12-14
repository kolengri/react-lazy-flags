import * as React from "react";
import type { SVGProps } from "react";
const EtSn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="et-sn_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#et-sn_svg__a)">
      <path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <path fill="#0052b4" d="M0 0h512v160H0Z" />
      <path fill="#d80027" d="M0 352h512v160H0Z" />
      <path fill="#ff9811" d="m256 188-72 88v48h144v-48z" />
    </g>
  </svg>
);
export default EtSn;
