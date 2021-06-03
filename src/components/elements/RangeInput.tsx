import React, { useState, useEffect } from "react";

import * as styles from "./range-input.module.css";

const setSliderFill = (elem: HTMLElement, val: number, max: number) => {
  const percent = (val * 100) / max;
  let fillcolor = getComputedStyle(elem).getPropertyValue("--accentcolor");
  let gradient = `linear-gradient(to right, ${fillcolor} 0%, 
${fillcolor} ${percent}%, 
rgba(255,255,255,0.1) ${percent + 1}%, 
rgba(255,255,255,0)  100%)`;
  elem.style.backgroundImage = gradient;
};

const RangeInput = ({
  id,
  value = 100,
  max = 100,
  onInput = () => {},
  onChange = () => {},
}: {
  id: string;
  value?: number;
  max?: number;
  onInput?: (event: any) => void;
  onChange?: (value: string) => void;
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [cssProperties, setCSSProperties] = useState<any>({
    "--thumbposition": `${value}%`,
  });

  useEffect(() => {
    const percent = (value * 100) / max;
    setCSSProperties({
      "--thumbposition": `${percent}%`,
    });
    const sliderfill = document.getElementById(
      `slider-fill_${id}`
    ) as HTMLDivElement;
    if (sliderfill) setSliderFill(sliderfill, value, max);
  }, [value, id, max]);

  useEffect(() => {
    const slider = document.getElementById(
      `input-range_${id}`
    ) as HTMLInputElement;
    slider.max = `${max}`;
  }, [max, id]);

  const updateSlider = (val: string) => {
    const sliderfill = document.getElementById(
      `slider-fill_${id}`
    ) as HTMLDivElement;
    //sets the text display and location for each thumb and the slider fill
    setThumb(Number.parseInt(val));
    if (sliderfill) setSliderFill(sliderfill, Number.parseInt(val), max);
  };

  const setThumb = (val: number) => {
    const percent = (val * 100) / max;
    setCSSProperties({
      "--thumbposition": `${percent}%`,
    });
  };

  return (
    <div className={styles.rangewrapper} style={cssProperties}>
      <div id={`slider-fill_${id}`} className={styles.sliderfill}>
        <input
          id={`input-range_${id}`}
          className={styles.customrange}
          type="range"
          min="0"
          max="100"
          value={value !== undefined ? value : currentValue}
          onChange={({ target: { value: val } }) => {
            console.log("on change, val:", val);
            updateSlider(val);
            setCurrentValue(Number.parseInt(val));
            onChange(val);
          }}
          onInput={onInput}
        />
      </div>
      <div id={`slider-thumb_${id}`} className={styles.sliderthumb}></div>
    </div>
  );
};

export default RangeInput;
