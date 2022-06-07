import React from "react";
import { getStoredAnimals } from "../../api/fetch";
import { Animal } from "../../models/Animal";
import { AnimalItem } from "../OneAnimal";
import { Wrapper } from "./wrapper";

const AnimalContainer: React.FC = () => {
  const animals: Animal[] = getStoredAnimals();
  return (
    <Wrapper>
      {animals.map((animal) => (
        <AnimalItem animal={animal} key={animal.id} />
      ))}
    </Wrapper>
  );
};

export { AnimalContainer };
