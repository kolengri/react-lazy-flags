import * as React from "react";
import type { SVGProps } from "react";
const Gf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="gf_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#gf_svg__a)">
      <path fill="#6da544" d="m0 0 216.9 301.6L512 512V0z" />
      <path fill="#ffda44" d="m0 0 512 512H0z" />
      <path fill="#d80027" d="m256 121 90 270-234-168h288L166 391z" />
    </g>
  </svg>
);
export default Gf;
