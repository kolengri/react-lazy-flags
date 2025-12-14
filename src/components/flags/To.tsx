import * as React from "react";
import type { SVGProps } from "react";
const SvgTo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="to_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#to_svg__a)">
      <path fill="#d80027" d="M0 256 256 0h256v512H0z" />
      <path fill="#eee" d="M0 0h256v256H0z" />
      <path
        fill="#d80027"
        d="M167 133.6v-33.4h-33.4v33.4h-33.4V167h33.4v33.3H167V167h33.3v-33.4z"
      />
    </g>
  </svg>
);
export default SvgTo;
