import * as React from "react";
import type { SVGProps } from "react";
const UsTx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="us-tx_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#us-tx_svg__a)">
      <path fill="#0052b4" d="M0 0h167l64 256-64 256H0Z" />
      <path
        fill="#eee"
        d="m43.5 317 104-75h-128l104 75-40-122zM167 0h345v256l-173 64-172-64Z"
      />
      <path fill="#d80027" d="M167 256h345v256H167z" />
    </g>
  </svg>
);
export default UsTx;
