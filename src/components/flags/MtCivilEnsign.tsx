import * as React from "react";
import type { SVGProps } from "react";
const MtCivilEnsign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="mt-civil_ensign_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#mt-civil_ensign_svg__a)">
      <path fill="#d80027" d="M0 0h512v512H0z" />
      <path
        fill="#eee"
        d="M0 0v512h512V0zm48 48h416v416H48zm141 47 67 161 67-161-67 67zm67 161 161 67-67-67 67-67zm0 0-67 161 67-67 67 67zm0 0L95 189l67 67-67 67z"
      />
    </g>
  </svg>
);
export default MtCivilEnsign;
