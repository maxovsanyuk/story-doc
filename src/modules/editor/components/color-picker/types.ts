import { ColorResult } from "react-color";

export interface ColorPickerProps {
  isOpen: boolean;
  onClick: () => void;
  color: string | undefined;
  onChangeColor: (colorResult: ColorResult) => void;
}
