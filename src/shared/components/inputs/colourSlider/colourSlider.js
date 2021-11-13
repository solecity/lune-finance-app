// base
import React from "react";

// external components
import { SliderPicker } from "react-color";
import Container from "@mui/material/Container";

const InputColourSlider = () => {
  const [colour, setColour] = React.useState("");

  const handleSlider = (colour) => {
    setColour(colour.hex);
  };

  return (
    <Container>
      <SliderPicker color={colour} onChangeComplete={handleSlider} />
    </Container>
  );
};

InputColourSlider.propTypes = {};

export default InputColourSlider;
