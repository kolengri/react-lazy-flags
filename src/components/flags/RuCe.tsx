import * as React from "react";
import type { SVGProps } from "react";
const RuCe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="ru-ce_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#ru-ce_svg__a)">
      <path fill="#d80027" d="m96 357 208-32 208 32v155H96l-32-78Z" />
      <path fill="#496e2d" d="M96 0h416v293l-208 32-208-32-32-147Z" />
      <path fill="#eee" d="M0 0v512h96V357h416v-64H96V0Z" />
    </g>
  </svg>
);
export default RuCe;
