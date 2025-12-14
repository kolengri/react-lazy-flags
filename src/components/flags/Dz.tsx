import * as React from "react";
import type { SVGProps } from "react";
const SvgDz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="dz_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#dz_svg__a)">
      <path fill="#496e2d" d="M0 0h256l32 256-32 256H0Z" />
      <path fill="#eee" d="M256 0h256v512H256z" />
      <path
        fill="#d80027"
        d="M245 167a89 89 0 1 0 67 153 72 72 0 0 1-35 8 72 72 0 1 1 35-136 89 89 0 0 0-67-25m66 40-21 29-34-11 21 29-21 29 34-11 21 29v-36l34-11-34-11z"
      />
    </g>
  </svg>
);
export default SvgDz;
