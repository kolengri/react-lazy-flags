import * as React from "react";
import type { SVGProps } from "react";
const SvgEtSw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="et-sw_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#et-sw_svg__a)">
      <path fill="#6da544" d="M0 0h512v512H0Z" />
      <path fill="#0052b4" d="M0 0v80l64 176L0 432v80l256-256Z" />
      <path fill="#eee" d="M0 80v80l64 96-64 96v80l176-176Z" />
      <path fill="#ffda44" d="m344 317 104-75H320l104 75-40-122z" />
      <path fill="#d80027" d="M0 160v192l96-96z" />
    </g>
  </svg>
);
export default SvgEtSw;
