import * as React from "react";
import type { SVGProps } from "react";
const SvgCl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="cl_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#cl_svg__a)">
      <path fill="#d80027" d="m0 256 254.5-51.3L512 256v256H0z" />
      <path fill="#0052b4" d="M0 0h256l52.7 132.8L256 256H0z" />
      <path
        fill="#eee"
        d="M256 0h256v256H256zM152.4 89l16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51L82.2 140h53.6z"
      />
    </g>
  </svg>
);
export default SvgCl;
