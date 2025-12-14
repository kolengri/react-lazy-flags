import * as React from "react";
import type { SVGProps } from "react";
const SvgLa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="la_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#la_svg__a)">
      <path
        fill="#d80027"
        d="M0 0h512v144.8l-45.8 113L512 367.4V512H0V367.4l46.3-111.1L0 144.8z"
      />
      <path fill="#0052b4" d="M0 144.8h512v222.6H0z" />
      <circle cx={256} cy={256.1} r={89} fill="#eee" />
    </g>
  </svg>
);
export default SvgLa;
