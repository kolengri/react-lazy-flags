import * as React from "react";
import type { SVGProps } from "react";
const SvgMv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="mv_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#mv_svg__a)">
      <path fill="#d80027" d="M0 0h512v512H0z" />
      <path fill="#6da544" d="M89 133.6h334v244.8H89z" />
      <path
        fill="#eee"
        d="M297.2 328.3a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7"
      />
    </g>
  </svg>
);
export default SvgMv;
