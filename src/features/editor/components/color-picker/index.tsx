import { SketchPicker } from "react-color";
import { ColorPickerProps } from "./types";
import { ColorPickerStyles } from "./styles";

import CancelIcon from "../../../../assets/cancel.png";
import ColorPickerIcon from "../../../../assets/color-picker.png";

export const ColorPicker = ({
  color,
  isOpen,
  onClick,
  onChangeColor,
}: ColorPickerProps) => {
  return (
    <ColorPickerStyles>
      <img
        alt="color picker"
        onClick={onClick}
        className="color-picker-img"
        src={isOpen ? CancelIcon : ColorPickerIcon}
      />
      {isOpen && (
        <SketchPicker
          color={color}
          onChangeComplete={(colorResult) => onChangeColor(colorResult)}
        />
      )}
    </ColorPickerStyles>
  );
};
