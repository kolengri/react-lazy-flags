import * as React from "react";
import type { SVGProps } from "react";
const Pe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="pe_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#pe_svg__a)">
      <path
        fill="#d80027"
        d="M0 0h167l86 41.2L345 0h167v512H345l-87.9-41.4L167 512H0z"
      />
      <path fill="#eee" d="M167 0h178v512H167z" />
    </g>
  </svg>
);
export default Pe;
