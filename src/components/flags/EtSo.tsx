import * as React from "react";
import type { SVGProps } from "react";
const EtSo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="et-so_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#et-so_svg__a)">
      <path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
      <path fill="#496e2d" d="M0 0h512v160H0Z" />
      <path fill="#d80027" d="M0 352h512v160H0Z" />
      <path fill="#338af3" d="M0 0v512l256-256Z" />
      <path fill="#eee" d="M132 168v176L28 202l168 54-168 54Z" />
    </g>
  </svg>
);
export default EtSo;
