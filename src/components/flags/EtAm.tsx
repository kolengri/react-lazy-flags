import * as React from "react";
import type { SVGProps } from "react";
const EtAm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="et-am_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#et-am_svg__a)">
      <path fill="#ffda44" d="M0 0h192l160 64L512 0v512H320l-160-64L0 512Z" />
      <path fill="#d80027" d="M0 512 192 0h320L320 512Z" />
      <path fill="#ffda44" d="m176 378 208-150H128l208 150-80-244Z" />
    </g>
  </svg>
);
export default EtAm;
