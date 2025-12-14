import * as React from "react";
import type { SVGProps } from "react";
const Lc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="lc_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#lc_svg__a)">
      <path fill="#338af3" d="M0 0h512v512H0z" />
      <path fill="#eee" d="M161.4 345h189.2L256 122.4z" />
      <path fill="#333" d="M194.3 322.8 256 182.4l61.7 140.4z" />
      <path fill="#ffda44" d="M161.4 345h189.2L256 256z" />
    </g>
  </svg>
);
export default Lc;
