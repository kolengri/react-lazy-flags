import * as React from "react";
import type { SVGProps } from "react";
const AqTrueSouth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="aq-true_south_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#aq-true_south_svg__a)">
      <path fill="#eee" d="M0 256 256 28l256 228v256H0Z" />
      <path
        fill="#026"
        d="m114 256 142 228 142-228-142 57ZM0 0h512v256H398L256 28 114 256H0Z"
      />
    </g>
  </svg>
);
export default AqTrueSouth;
