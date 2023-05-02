import React, { ChangeEvent, useState } from "react";
import { ElementKeysEnum, IElement } from "../../store/types";
import { useAlert } from "react-alert";
import { changeElementConfiguration } from "../../store/editor-reducer";
import { useDispatch } from "react-redux";
import { ColorResult } from "react-color";
import Select, { SingleValue } from "react-select";
import FontPicker from "font-picker-react";
import isEqual from "lodash/isEqual";
import { ElementEditorStyles } from "./styles";
import { ElementStateChangeProps, OptionType } from "./types";
import { fontSizeOptions, fontWeightOptions } from "./constants";
import { ColorPicker } from "../color-picker";

export const ElementEditor = React.memo(
  ({ element }: { element: IElement }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const [elementState, setElementState] = useState<IElement>(element);
    const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
    const { color, fontFamily, fontSize, value, fontWeight } = elementState;

    const onElementStateChange = ({ key, value }: ElementStateChangeProps) => {
      setElementState({ ...elementState, [key]: value });
    };
    const onChangeColor = (colorResult: ColorResult) => {
      onElementStateChange({
        key: ElementKeysEnum.COLOR,
        value: colorResult.hex,
      });
    };

    const onFontFamilyChange = (nextFont: { family: string }) => {
      onElementStateChange({
        key: ElementKeysEnum.FONT_FAMILY,
        value: nextFont.family,
      });
    };

    const onFontSizeChange = (newValue: SingleValue<OptionType>) => {
      onElementStateChange({
        key: ElementKeysEnum.FONT_SIZE,
        value: newValue?.value,
      });
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      onElementStateChange({
        key: ElementKeysEnum.VALUE,
        value: event.target.value,
      });
    };

    const onFontWeightChange = (newValue: SingleValue<OptionType>) => {
      onElementStateChange({
        key: ElementKeysEnum.FONT_WEIGHT,
        value: newValue?.value,
      });
    };

    const onChangeSave = () => {
      dispatch(changeElementConfiguration(elementState));
      alert.show("Saved!");
      if (isColorPickerOpen) {
        setIsColorPickerOpen(false);
      }
    };

    const onColorPickerClick = () => {
      setIsColorPickerOpen((prev) => !prev);
    };

    return (
      <ElementEditorStyles>
        <input
          type="text"
          value={value}
          className="text-input"
          onChange={onInputChange}
          style={{ color, fontFamily, fontSize, fontWeight }}
        />
        <div className="selects-box">
          <Select
            defaultValue={fontSizeOptions[0]}
            options={fontSizeOptions}
            onChange={onFontSizeChange}
          />
          <Select
            defaultValue={fontWeightOptions[0]}
            options={fontWeightOptions}
            onChange={onFontWeightChange}
          />
        </div>
        <FontPicker
          apiKey="AIzaSyD82Vku1qvWIDHK72Qk8i1-hktOIv_tPJA"
          activeFontFamily={fontFamily}
          onChange={onFontFamilyChange}
        />
        <ColorPicker
          color={color}
          isOpen={isColorPickerOpen}
          onClick={onColorPickerClick}
          onChangeColor={onChangeColor}
        />

        {!isEqual(element, elementState) && (
          <button className="save-btn" onClick={onChangeSave}>
            Save changes
          </button>
        )}
      </ElementEditorStyles>
    );
  }
);
