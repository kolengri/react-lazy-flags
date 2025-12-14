import * as React from "react";
import type { SVGProps } from "react";
const Tt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="tt_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#tt_svg__a)">
      <path fill="#d80027" d="M0 110.2 110.2 0H512v401.8L401.8 512H0z" />
      <path fill="#eee" d="M110.2 0H63L0 63v47.2L401.8 512H449l63-63v-47.2z" />
      <path fill="#333" d="M512 512v-63L63 0H0v63l449 449z" />
    </g>
  </svg>
);
export default Tt;
