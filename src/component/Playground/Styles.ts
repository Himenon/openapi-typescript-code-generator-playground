import styled from "styled-components";

export const Styles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #eee;
  padding: 0;

  .editor {
    height: 98vh;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .preview {
    height: 98vh;
    max-height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;
