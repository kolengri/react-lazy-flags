import * as React from "react";
import type { SVGProps } from "react";
const Ng = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ng_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ng_svg__a)">
      <path
        fill="#6da544"
        d="M0 0v512h160l96-64 96 64h160V0H352l-96 64-96-64Z"
      />
      <path fill="#eee" d="M160 0h192v512H160Z" />
    </g>
  </svg>
);
export default Ng;
