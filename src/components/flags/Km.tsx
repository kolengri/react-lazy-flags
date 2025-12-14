import * as React from "react";
import type { SVGProps } from "react";
const Km = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="km_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#km_svg__a)">
      <path fill="#ffda44" d="M96 128h416V0H0Z" />
      <path fill="#eee" d="M96 128h416v128l-288 32Z" />
      <path fill="#d80027" d="M512 256H224L64 416l448-32z" />
      <path fill="#0052b4" d="M96 384 0 511l512 1V384Z" />
      <path fill="#6da544" d="M0 0v512l256-256Z" />
      <path
        fill="#eee"
        d="M112 177a78 78 0 1 0 17 154 78 78 0 0 1-61-76 78 78 0 0 1 61-76zm16 12-4 12h-14l11 8-4 13 11-8 11 8-4-13 10-8h-13zm0 33-4 13h-14l11 8-4 12 11-8 11 8-4-12 10-8h-13zm0 33-4 13h-14l11 8-4 13 11-8 11 8-4-13 10-8h-13zm0 34-4 12h-14l11 8-4 13 11-8 11 8-4-13 10-8h-13z"
      />
    </g>
  </svg>
);
export default Km;
