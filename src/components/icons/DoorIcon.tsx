import React from "react";
import { IconProps } from "./types";

export const DoorIcon = ({size = 24, color = "", className = ''}: IconProps & { className: string}) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 492.5 492.5"
    enableBackground="new 0 0 492.5 492.5"
    className={className}
  >
    <path
      d="M184.646,0v21.72H99.704v433.358h31.403V53.123h53.539V492.5l208.15-37.422v-61.235V37.5L184.646,0z M222.938,263.129
		c-6.997,0-12.67-7.381-12.67-16.486c0-9.104,5.673-16.485,12.67-16.485s12.67,7.381,12.67,16.485
		C235.608,255.748,229.935,263.129,222.938,263.129z"
    />
  </svg>
);

export default DoorIcon;