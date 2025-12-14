import * as React from "react";
import type { SVGProps } from "react";
const SvgUsTn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="us-tn_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#us-tn_svg__a)">
      <path fill="#0052b4" d="M448 0h64v512h-64l-16-256Z" />
      <path fill="#eee" d="M416 0h32v512h-32l-16-256Z" />
      <path fill="#d80027" d="M0 0h416v512H0z" />
      <circle cx={208} cy={256} r={160} fill="#eee" />
      <circle cx={208} cy={256} r={128} fill="#0052b4" />
      <path
        fill="#eee"
        d="m145 284 60 83V265l-60 83 98-32zm15-128-22 100 76-68-102 11 89 51zm147 49-42 93-21-100 75 69-102-11z"
      />
    </g>
  </svg>
);
export default SvgUsTn;
