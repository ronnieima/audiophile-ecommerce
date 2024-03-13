import React from "react";

type CirclePatternProps = { size?: number };
export default function CirclePattern({ size = 944 }: CirclePatternProps) {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#FFF" fill="none" fill-rule="evenodd" opacity=".202">
        <circle cx={size / 2} cy={size / 2} r="235.5" />
        <circle cx={size / 2} cy={size / 2} r="270.5" />
        <circle cx={size / 2} cy={size / 2} r="471.5" />
      </g>
    </svg>
  );
}
