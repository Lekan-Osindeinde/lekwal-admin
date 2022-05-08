import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import * as React from "react";
import { useState } from "react";
import "./verticalSlider.css";

function VerticalSlider({ onValueSet }) {
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onValueSet(newValue);
  };
  console.log(value);

  return (
    <Box sx={{ height: 470 }}>
      <Slider
        sx={{
          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
        }}
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Temperature"
        onKeyDown={preventHorizontalKeyboardNavigation}
      />
    </Box>
  );
}
export default VerticalSlider;
