import * as React from "react";
import type { SVGProps } from "react";
const SvgOc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <mask id="oc_svg__a">
      <path fill="#fff" d="M0 0h512v512H0z" />
    </mask>
    <g mask="url(#oc_svg__a)">
      <path fill="#d80027" d="M0 0h512v512H0z" />
      <circle cx={256} cy={64} r={32} fill="#ffda44" />
      <circle cx={64} cy={256} r={32} fill="#ffda44" />
      <circle cx={448} cy={256} r={32} fill="#ffda44" />
      <circle cx={256} cy={448} r={32} fill="#ffda44" />
      <circle cx={352} cy={400} r={32} fill="#ffda44" />
      <circle cx={400} cy={352} r={32} fill="#ffda44" />
      <circle cx={352} cy={112} r={32} fill="#ffda44" />
      <circle cx={400} cy={160} r={32} fill="#ffda44" />
      <circle cx={160} cy={112} r={32} fill="#ffda44" />
      <circle cx={112} cy={160} r={32} fill="#ffda44" />
      <circle cx={112} cy={352} r={32} fill="#ffda44" />
      <circle cx={160} cy={400} r={32} fill="#ffda44" />
      <path
        fill="#ffda44"
        d="m256 60-103 52 20 61-61-20-52 103 52 103 61-20-20 61 103 52 103-52-20-61 61 20 52-103-52-103-61 20 20-61zm0 36 64 32-32 96 96-32 32 64-32 64-96-32 32 96-64 32-64-32 32-96-96 32-32-64 32-64 96 32-32-96z"
      />
    </g>
  </svg>
);
export default SvgOc;
