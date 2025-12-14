import * as React from "react";
import type { SVGProps } from "react";
const CaQc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ca-qc_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ca-qc_svg__a)">
      <path
        fill="#0052b4"
        d="M0 0h224l32 32 32-32h224v224l-32 32 32 32v224H288l-32-32-32 32H0V288l32-32-32-32Z"
      />
      <path
        fill="#eee"
        d="M224 0v224H0v64h224v224h64V288h224v-64H288V0zm-96 96v32H96v32h32v32h32v-32h32v-32h-32V96zm224 0v32h-32v32h32v32h32v-32h32v-32h-32V96zM128 320v32H96v32h32v32h32v-32h32v-32h-32v-32zm224 0v32h-32v32h32v32h32v-32h32v-32h-32v-32z"
      />
    </g>
  </svg>
);
export default CaQc;
