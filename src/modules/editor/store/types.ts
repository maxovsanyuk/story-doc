export enum ElementKeysEnum {
  ID = "id",
  COLOR = "color",
  VALUE = "value",
  FONT_SIZE = "fontSize",
  FONT_WEIGHT = "fontWeight",
  FONT_FAMILY = "fontFamily",
}
export interface IElement {
  [ElementKeysEnum.ID]: string;
  [ElementKeysEnum.VALUE]: string;
  [ElementKeysEnum.FONT_SIZE]: number;
  [ElementKeysEnum.FONT_WEIGHT]: number;
  [ElementKeysEnum.COLOR]: string | undefined;
  [ElementKeysEnum.FONT_FAMILY]: string | undefined;
}
export interface EditorState {
  backgroundColor: string;
  elements: IElement[];
}
