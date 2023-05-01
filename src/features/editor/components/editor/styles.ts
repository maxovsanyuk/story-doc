import styled from "styled-components";

export const EditorStyles = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ backgroundColor }) => backgroundColor};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 16px 0 rgba(66, 68, 90, 1);
`;
