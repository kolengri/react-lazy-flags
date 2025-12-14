import * as React from "react";
import type { SVGProps } from "react";
const Ch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ch_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ch_svg__a)">
      <path fill="#d80027" d="M0 0h512v512H0z" />
      <path
        fill="#eee"
        d="M389.6 211.5h-89v-89h-89.1v89h-89v89h89v89h89v-89h89z"
      />
    </g>
  </svg>
);
export default Ch;
