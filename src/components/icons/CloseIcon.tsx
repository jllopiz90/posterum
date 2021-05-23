import React from "react";
import { IconProps } from "./types";

export const CloseIcon = ({
  size = 24,
  color = "red",
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    stroke={color}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default CloseIcon;
