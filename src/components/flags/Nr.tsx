import * as React from "react";
import type { SVGProps } from "react";
const SvgNr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="nr_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#nr_svg__a)">
      <path
        fill="#0052b4"
        d="M0 0h512v233.7L494.3 257l17.7 21.3V512H0V278.3l18.7-22.9L0 233.7z"
      />
      <path
        fill="#eee"
        d="m211.5 345-28.7 13.5 15.3 27.8-31.2-6-4 31.5-21.6-23.1-21.7 23.1-4-31.4-31.1 6 15.3-27.9L71 345l28.7-13.4-15.3-27.8 31.1 6 4-31.5 21.7 23.1 21.7-23.1 4 31.4 31-6-15.2 27.9z"
      />
      <path fill="#ffda44" d="M0 233.7h512v44.6H0z" />
    </g>
  </svg>
);
export default SvgNr;
