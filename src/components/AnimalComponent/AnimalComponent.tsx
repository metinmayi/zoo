import React from "react";
import { useNavigate } from "react-router-dom";
import { Animal } from "../../models/Animal";
import { ZooButton } from "../ZooButton";
import { Description } from "./description";
import { Img } from "./img";
import { Title } from "./title";
import { Wrapper } from "./wrapper";

type Props = {
  animal: Animal;
};
const AnimalComponent: React.FC<Props> = ({ animal }) => {
  // Redirect to animal function
  const navigate = useNavigate();
  const redirect: Function = (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <Wrapper>
      <Img imgURL={animal.imageUrl}></Img>
      <Title>{animal.name}</Title>
      <Description>{animal.shortDescription}</Description>
      <ZooButton handleClick={() => redirect(animal.id)}>
        Visit Animal
      </ZooButton>
    </Wrapper>
  );
};

export { AnimalComponent };
