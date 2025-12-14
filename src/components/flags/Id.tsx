import * as React from "react";
import type { SVGProps } from "react";
const Id = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="id_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#id_svg__a)">
      <path fill="#eee" d="m0 256 249.6-41.3L512 256v256H0z" />
      <path fill="#a2001d" d="M0 0h512v256H0z" />
    </g>
  </svg>
);
export default Id;
