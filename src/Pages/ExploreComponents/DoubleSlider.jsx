import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const DoubleSlider = ({ min, max, step, defaultValue, onChange }) => {
    const [bounds, setBounds] = useState(defaultValue || [min, max]);

    const handleChange = (newBounds) => {
        setBounds(newBounds);
        onChange(newBounds);
    };

    return (
        <Slider
            range
            min={min}
            max={max}
            step={step}
            defaultValue={defaultValue}
            onChange={handleChange}
            allowCross={false}
            value={bounds}
        />
    );
};

export default DoubleSlider;
