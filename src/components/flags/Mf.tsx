import * as React from "react";
import type { SVGProps } from "react";
const Mf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="mf_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#mf_svg__a)">
      <path fill="#eee" d="M0 128V0h512v128L299 512h-86z" />
      <circle cx={256} cy={213} r={57} fill="#ffda44" />
      <path fill="#eee" d="M185 213h142l-71 128Z" />
      <path fill="#d80027" d="M256 341 142 235h228z" />
      <path fill="#0052b4" d="m0 128 213 213v171H0Zm512 0L299 341v171h213z" />
    </g>
  </svg>
);
export default Mf;
