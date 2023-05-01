import { createSlice } from "@reduxjs/toolkit";
import { IElement } from "./types";
import { initialState } from "./constants";

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setBackgroundColor: (state, { payload }) => {
      state.backgroundColor = payload;
    },
    changeElementConfiguration: (state, { payload }: { payload: IElement }) => {
      state.elements = state.elements.map((element) => {
        if (element.id === payload.id) {
          return payload;
        }
        return element;
      });
    },
  },
});

export const { changeElementConfiguration, setBackgroundColor } =
  editorSlice.actions;

export default editorSlice.reducer;
