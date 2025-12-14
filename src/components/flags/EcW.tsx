import * as React from "react";
import type { SVGProps } from "react";
const EcW = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ec-w_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ec-w_svg__a)">
      <path
        fill="#eee"
        d="m0 167 254.6-36.6L512 166.9v178l-254.6 36.4L0 344.9z"
      />
      <path fill="#6da544" d="M0 0h512v166.9H0z" />
      <path fill="#0052b4" d="M0 344.9h512V512H0z" />
    </g>
  </svg>
);
export default EcW;
