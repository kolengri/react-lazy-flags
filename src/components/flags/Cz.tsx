import * as React from "react";
import type { SVGProps } from "react";
const Cz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="cz_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#cz_svg__a)">
      <path fill="#eee" d="M0 0h512v256l-265 45.2z" />
      <path fill="#d80027" d="M210 256h302v256H0z" />
      <path fill="#0052b4" d="M0 0v512l256-256z" />
    </g>
  </svg>
);
export default Cz;
