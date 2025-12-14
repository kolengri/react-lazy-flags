import * as React from "react";
import type { SVGProps } from "react";
const Mu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="mu_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#mu_svg__a)">
      <path fill="#6da544" d="m0 378.3 254-37.1 258 37V512H0z" />
      <path fill="#ffda44" d="m0 256.1 252.2-33.3L512 256v122.4H0z" />
      <path fill="#0052b4" d="M0 133.7 249.7 97 512 133.7v122.4H0z" />
      <path fill="#d80027" d="M0 0h512v133.7H0z" />
    </g>
  </svg>
);
export default Mu;
