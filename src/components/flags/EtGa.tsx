import * as React from "react";
import type { SVGProps } from "react";
const EtGa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="et-ga_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#et-ga_svg__a)">
      <path fill="#d80027" d="M0 0h512v128l-256 64L0 128Z" />
      <path fill="#eee" d="M0 128h512v128l-256 64L0 256Z" />
      <path fill="#496e2d" d="M0 256h512v128l-256 64L0 384Z" />
      <path fill="#333" d="M0 384h512v128H0Zm221-139 91-65H200l91 65-35-106z" />
    </g>
  </svg>
);
export default EtGa;
