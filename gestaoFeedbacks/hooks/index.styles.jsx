import styled from "styled-components";

export const Rows = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  flex-direction: column;
`;

export const StyledResposta = styled.div`
  background-color: #3d3d3d;
  padding: 10px;
`;

export const StyledNomeAdmResposta = styled.div`
  width: 100%;
  :nth-child(1) {
    font-weight: bold;
  }
`;
