import React from "react";
import ReactDOM from "react-dom/client";
import { Editor } from "./features/editor/components/editor";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {
  transitions,
  positions,
  Provider as AlertProvider,
  types,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./index.css";

const options = {
  type: types.SUCCESS,
  position: positions.TOP_RIGHT,
  timeout: 2000,
  offset: "30px",
  transition: transitions.SCALE,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Editor />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);
