import * as React from "react";
import type { SVGProps } from "react";
const Pa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="pa_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#pa_svg__a)">
      <path fill="#eee" d="M0 0h256l256 256v256H256L0 256z" />
      <path fill="#0052b4" d="M0 256v256h256V256z" />
      <path fill="#d80027" d="M256 0h256v256H256z" />
      <path
        fill="#0052b4"
        d="m152.4 89 16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51L82.2 140h53.6z"
      />
      <path
        fill="#d80027"
        d="m359.6 289.4 16.6 51h53.6L386.4 372l16.6 51-43.4-31.5-43.4 31.6 16.6-51-43.4-31.6H343z"
      />
    </g>
  </svg>
);
export default Pa;
