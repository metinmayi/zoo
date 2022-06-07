import React from "react";
import { Animal } from "../../models/Animal";
import { Description } from "./description";
import { Img } from "./img";
import { AnimalLink } from "./link";
import { Title } from "./title";
import { Wrapper } from "./wrapper";

type Props = {
  animal: Animal;
};
const AnimalItem: React.FC<Props> = ({ animal }) => {
  return (
    <Wrapper>
      <Title>{animal.latinName}</Title>
      <Img imgURL={animal.imageUrl}></Img>
      <Description>{animal.shortDescription}</Description>
      <AnimalLink to={`${animal.id}`}>Go to animal</AnimalLink>
    </Wrapper>
  );
};

export { AnimalItem };
