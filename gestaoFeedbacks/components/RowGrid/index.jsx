/* eslint-disable react/prop-types */

import { CardContainer, Title, History, Rating, Star } from "./index.style";

const Card = ({ aluno, history, rating, sideComponents }) => {
  return (
    <CardContainer>
      <div>
        <Title>{aluno.nome}</Title>
        <Rating>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} filled={i < rating}>
              ★
            </Star>
          ))}
        </Rating>
        <History>{history}</History>
      </div>
      <div>{sideComponents}</div>
      <div></div>
    </CardContainer>
  );
};

export default Card;
