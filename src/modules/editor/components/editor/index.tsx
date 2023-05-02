import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../../redux/store";
import { ColorResult } from "react-color";
import { setBackgroundColor } from "../../store/editor-reducer";
import { ColorPicker } from "../color-picker";
import { ElementEditor } from "../element-editor";
import { ConfigPreview } from "../config-preview";
import { EditorStyles } from "./styles";

export const Editor = () => {
  const dispatch = useDispatch();
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const { backgroundColor, elements } = useSelector(
    (state: RootState) => state.editor
  );
  const onBackgroundColorChange = (colorResult: ColorResult) => {
    dispatch(setBackgroundColor(colorResult.hex));
  };
  const onColorPickerClick = () => {
    setIsColorPickerOpen((prev) => !prev);
  };

  return (
    <EditorStyles backgroundColor={backgroundColor}>
      <ColorPicker
        color={backgroundColor}
        isOpen={isColorPickerOpen}
        onClick={onColorPickerClick}
        onChangeColor={onBackgroundColorChange}
      />
      {elements.map((element) => (
        <ElementEditor element={element} key={element.id} />
      ))}
      <ConfigPreview />
    </EditorStyles>
  );
};
