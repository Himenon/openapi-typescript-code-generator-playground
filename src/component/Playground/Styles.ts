import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #eee;
  .editor {
    height: 98vh;
    width: 100%;
    padding: 0;
  }

  .preview {
    height: 98vh;
    max-height: 100%;
    overflow-y: scroll;
    width: 100%;
    padding: 0;
  }
`;
