import * as React from "react";
import type { SVGProps } from "react";
const SvgSlSealand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="sl-sealand_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#sl-sealand_svg__a)">
      <path fill="#eee" d="M512 0v160L368 368 160 512H0l224-288Z" />
      <path fill="#d80027" d="M0 512 512 0H0Z" />
      <path fill="#333" d="M512 160 160 512h352z" />
    </g>
  </svg>
);
export default SvgSlSealand;
