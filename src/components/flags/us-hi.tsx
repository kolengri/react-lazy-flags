import * as React from "react";
import type { SVGProps } from "react";
const SvgUsHi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="us-hi_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#us-hi_svg__a)">
      <path
        fill="#eee"
        d="M0 256V96l32-32L0 32V0h32l32 32L96 0h416v64l-32 64 32 64v64l-32 64 32 64v64l-256 32L0 448v-64l32-64z"
      />
      <path
        fill="#0052b4"
        d="m173 128 83 83v-19h256v-64L384 96l-128 32Zm-45 45v83h83zM0 320v64h512v-64l-256-32Z"
      />
      <path
        fill="#d80027"
        d="M32 0v32H0v64h32v160H0v64h512v-64H96V96h160v32h256V64H256V32H96V0zm224 256v-31l-97-97h-31zM0 448v64h512v-64z"
      />
    </g>
  </svg>
);
export default SvgUsHi;
