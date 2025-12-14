import * as React from "react";
import type { SVGProps } from "react";
const Wf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="wf_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#wf_svg__a)">
      <path fill="#d80027" d="M256 0h256v512H0V256Z" />
      <path fill="#eee" d="M0 0h256v256H0Z" />
      <path fill="#0052b4" d="M0 0h75v224H0Z" />
      <path fill="#d80027" d="M149 0h75v224h-75z" />
      <path
        fill="#eee"
        d="m384 232-72-72h144zm-24 24-72-72v144zm24 24-72 72h144zm24-24 72-72v144z"
      />
    </g>
  </svg>
);
export default Wf;
