import * as React from "react";
import type { SVGProps } from "react";
const EtHa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="et-ha_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#et-ha_svg__a)">
      <path
        fill="#eee"
        d="M0 0h512v64l-32 48 32 48v192l-32 48 32 48v64H0v-64l32-48-32-48V160l32-48L0 64Z"
      />
      <path fill="#d80027" d="M0 64h512v96H0z" />
      <path fill="#6da544" d="M0 352h512v96H0z" />
      <circle cx={256} cy={256} r={72} fill="#338af3" />
    </g>
  </svg>
);
export default EtHa;
