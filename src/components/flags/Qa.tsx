import * as React from "react";
import type { SVGProps } from "react";
const SvgQa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="qa_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#qa_svg__a)">
      <path fill="#eee" d="M0 0h173l61 255.8L173.4 512H0z" />
      <path
        fill="#751a46"
        d="m173 0-72.7 30.8L176 63l-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.1 75.7 32.2-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.2 73.1 31H512V0z"
      />
    </g>
  </svg>
);
export default SvgQa;
