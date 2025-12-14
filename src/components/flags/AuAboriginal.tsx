import * as React from "react";
import type { SVGProps } from "react";
const AuAboriginal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="au-aboriginal_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#au-aboriginal_svg__a)">
      <path fill="#333" d="M0 0h512v256l-256 32L0 256Z" />
      <path fill="#d80027" d="M0 256h512v256H0Z" />
      <circle cx={256} cy={256} r={128} fill="#ffda44" />
    </g>
  </svg>
);
export default AuAboriginal;
