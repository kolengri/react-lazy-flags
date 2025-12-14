import * as React from "react";
import type { SVGProps } from "react";
const Mt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="mt_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#mt_svg__a)">
      <path fill="#eee" d="M0 0h256l52 259.2L256 512H0z" />
      <path fill="#d80027" d="M256 0h256v512H256z" />
      <path fill="#acabb1" d="M160 128V96h-32v32H96v32h32v32h32v-32h32v-32z" />
    </g>
  </svg>
);
export default Mt;
