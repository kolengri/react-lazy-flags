import * as React from "react";
import type { SVGProps } from "react";
const InGj = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="in-gj_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#in-gj_svg__a)">
      <path
        fill="#eee"
        d="M256 96 0 128v128l256 32 256-32V128zm0 256L0 384v128h512V384z"
      />
      <path fill="#d80027" d="M0 0h512v128H0zm0 256h512v128H0z" />
    </g>
  </svg>
);
export default InGj;
