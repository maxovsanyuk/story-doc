import styled from "styled-components";

export const ElementEditorStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  background: #fff;
  padding: 30px 60px;
  margin-top: 40px;
  border-radius: 10px;

  #font-picker {
    box-shadow: none;
  }

  .text-input {
    border: none;
    background: #fff;
    border-bottom: 1px solid #d7d5e0;
    color: #4f4e55;

    &:focus {
      outline: none;
    }
  }

  .selects-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  }

  .save-btn {
    margin-top: 20px;
  }
`;
