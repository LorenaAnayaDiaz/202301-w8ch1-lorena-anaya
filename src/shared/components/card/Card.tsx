import { FC } from "react";
import { Button, CardContainer, CardImg } from "./CardStyled";

interface CardProps {
  imgUrl: string;
  name: string;
}

export const Card: FC<CardProps> = ({ name, imgUrl }) => {
  return (
    <CardContainer>
      <CardImg src={imgUrl} alt={`${name}-avatar`} />
      <div>
        <div>
          <span>Name:</span>
          <span> {name}</span>
        </div>
      </div>
      <Button>SEE MORE</Button>
    </CardContainer>
  );
};
