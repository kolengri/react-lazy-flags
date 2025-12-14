import * as React from "react";
import type { SVGProps } from "react";
const So = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="so_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#so_svg__a)">
      <path fill="#338af3" d="M0 0h512v512H0z" />
      <path
        fill="#eee"
        d="m256 133.6 27.6 85H373L300.7 271l27.6 85-72.3-52.5-72.3 52.6 27.6-85-72.3-52.6h89.4z"
      />
    </g>
  </svg>
);
export default So;
