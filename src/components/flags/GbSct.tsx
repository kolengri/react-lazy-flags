import * as React from "react";
import type { SVGProps } from "react";
const GbSct = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="gb-sct_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#gb-sct_svg__a)">
      <path fill="#0052b4" d="M0 68 68 0h376l68 68v376l-68 68H68L0 444Z" />
      <path
        fill="#eee"
        d="M0 0v68l188 188L0 444v68h68l188-188 188 188h68v-68L324 256 512 68V0h-68L256 188 68 0z"
      />
    </g>
  </svg>
);
export default GbSct;
