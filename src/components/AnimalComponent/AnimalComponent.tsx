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
const AnimalComponent: React.FC<Props> = ({ animal }) => {
  return (
    <Wrapper>
      <Img imgURL={animal.imageUrl}></Img>
      <Title>{animal.name}</Title>
      <Description>{animal.shortDescription}</Description>
      <AnimalLink to={`${animal.id}`}>Go to animal</AnimalLink>
    </Wrapper>
  );
};

export { AnimalComponent };
