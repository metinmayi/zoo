import React from "react";
import { getStoredAnimals } from "../../api/fetch";
import { Animal } from "../../models/Animal";
import { AnimalComponent } from "../AnimalComponent";
import { Wrapper } from "./wrapper";

const AnimalList: React.FC = () => {
  const animals: Animal[] = getStoredAnimals();
  return (
    <Wrapper>
      {animals.map((animal) => (
        <AnimalComponent animal={animal} key={animal.id} />
      ))}
    </Wrapper>
  );
};

export { AnimalList };
