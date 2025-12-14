import type { SVGProps } from "react";
import type { FlagCode } from "./flags";

export function Fallback({
  code,
  ...props
}: SVGProps<SVGSVGElement> & { code: FlagCode }) {
  return (
    <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#ccc" />
      <text
        x="256"
        y="256"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="24"
        fill="#666"
      >
        {code}
      </text>
    </svg>
  );
}
