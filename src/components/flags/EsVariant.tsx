import * as React from "react";
import type { SVGProps } from "react";
const EsVariant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="es-variant_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#es-variant_svg__a)">
      <path
        fill="#d80027"
        d="M0 0h512v128l-39.8 130.3L512 384v128H0V384l37.8-124L0 128z"
      />
      <path fill="#ffda44" d="M0 128h512v256H0z" />
    </g>
  </svg>
);
export default EsVariant;
