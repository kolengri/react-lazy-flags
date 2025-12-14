import * as React from "react";
import type { SVGProps } from "react";
const UsDc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="us-dc_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#us-dc_svg__a)">
      <path
        fill="#eee"
        d="M0 0h512v186l-64 48 64 48v57l-64 48 64 48v77H0v-77l64-48-64-48v-57l64-48-64-48Z"
      />
      <path
        fill="#d80027"
        d="M0 186h512v96H0zm0 153h512v96H0zm224-181 83-60H205l83 60-32-98Zm118 0 83-60H323l83 60-32-98Zm-236 0 83-60H87l83 60-32-98Z"
      />
    </g>
  </svg>
);
export default UsDc;
