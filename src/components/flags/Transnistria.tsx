import * as React from "react";
import type { SVGProps } from "react";
const Transnistria = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="transnistria_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#transnistria_svg__a)">
      <path
        fill="#a2001d"
        d="M0 0h512v189.5l-39 62 39 71.6V512H0V323l40.8-67L0 189.5z"
      />
      <path fill="#6da544" d="M0 189.5h512v133.6H0z" />
    </g>
  </svg>
);
export default Transnistria;
