import { ElementKeysEnum } from "../../store/types";

export type OptionType = { value: number; label: string };
export type ElementStateChangeProps = {
  key: ElementKeysEnum;
  value: unknown;
};
