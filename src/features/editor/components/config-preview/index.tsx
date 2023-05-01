import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ConfigPreviewStyles } from "./styles";

export const ConfigPreview = () => {
  const alert = useAlert();
  const config = useSelector((state: RootState) => state.editor);
  const configToStringify = JSON.stringify(config, null, 2);

  const onCopy = () => {
    alert.show("Copied!");
  };

  return (
    <ConfigPreviewStyles>
      <pre>{configToStringify}</pre>
      <CopyToClipboard text={configToStringify} onCopy={onCopy}>
        <button>Copy</button>
      </CopyToClipboard>
    </ConfigPreviewStyles>
  );
};
