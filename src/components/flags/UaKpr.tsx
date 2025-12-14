import * as React from "react";
import type { SVGProps } from "react";
const UaKpr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ua-kpr_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ua-kpr_svg__a)">
      <path fill="#0052b4" d="M128 0H0v128l160 224 224 160h128V384L352 160Z" />
      <path fill="#eee" d="M512 384 128 0h384Z" />
      <path fill="#ffda44" d="m0 128 384 384H0z" />
    </g>
  </svg>
);
export default UaKpr;
