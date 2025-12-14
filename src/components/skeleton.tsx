import type { SVGProps } from "react";

export function Skeleton(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.5, ...props.style }}
    >
      <rect width="512" height="512" fill="#e0e0e0" />
    </svg>
  );
}
