import { SketchPicker } from "react-color";
import { ColorPickerProps } from "./types";
import { ColorPickerStyles } from "./styles";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CancelIcon from "../../../../assets/cancel.png";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
