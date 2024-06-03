import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #303030;
  padding: 10px;
  overflow: hidden;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const History = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  color: #858585;
  overflow: hidden;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100px;
`;

export const Star = styled.span`
  font-size: 20px;
  color: ${(props) => (props.filled ? "#ffb400" : "#ccc")};
`;

export const Status = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  width: 165px;
  display: flex;
  padding-bottom: 2px;
  padding-top: 2px;
  justify-content: space-evenly;
  border-radius: 20px;
  background-color: ${(props) => (props.answered ? "#008000" : "#ff0000")};
  align-items: center;
`;
