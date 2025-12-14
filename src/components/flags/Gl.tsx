import * as React from "react";
import type { SVGProps } from "react";
const SvgGl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="gl_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#gl_svg__a)">
      <path fill="#d80027" d="m0 256 259-45.3L512 256v256H0z" />
      <path fill="#eee" d="M0 0h512v256H0z" />
      <path fill="#eee" d="M55.7 256a122.4 122.4 0 1 0 244.8 0l-123-24z" />
      <path fill="#d80027" d="M55.7 256a122.4 122.4 0 1 1 244.8 0z" />
    </g>
  </svg>
);
export default SvgGl;
