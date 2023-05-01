import { EditorState } from "./types";
import { nanoid } from "@reduxjs/toolkit";

export const initialState: EditorState = {
  backgroundColor: "#68D9CA",
  elements: [
    {
      id: nanoid(),
      value: "test-1",
      color: undefined,
      fontWeight: 500,
      fontSize: 14,
      fontFamily: undefined,
    },
    {
      id: nanoid(),
      value: "test-2",
      color: undefined,
      fontWeight: 500,
      fontSize: 14,
      fontFamily: undefined,
    },
  ],
};
