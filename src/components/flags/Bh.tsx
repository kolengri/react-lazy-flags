import * as React from "react";
import type { SVGProps } from "react";
const SvgBh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="bh_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#bh_svg__a)">
      <path fill="#eee" d="M0 0h182.5l88.1 268.5-88 243.5H0z" />
      <path
        fill="#d80027"
        d="m182.5 0-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6-82.3 42.7 82.3 42.7-82.3 42.6 82.3 42.7-82.3 42.7 82.3 42.6H512V0z"
      />
    </g>
  </svg>
);
export default SvgBh;
