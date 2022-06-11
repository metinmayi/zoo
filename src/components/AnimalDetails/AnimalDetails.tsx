import React from "react";
import { useZooContext } from "../../context/zooContext";
import { Animal } from "../../models/Animal";
import { AnimalComponent } from "../AnimalComponent";
import { NotificationComponent } from "../NotificationComponent";
import { ZooButton } from "../ZooButton";
import { checkHunger, feedAnimal, useParameters } from "./helpers";
import { Wrapper } from "./wrapper";

const AnimalDetails: React.FC = () => {
  // Animal Context
  const { animals, setAnimals, setHungryAnimals, hungryAnimals } =
    useZooContext();

  // setAnimals(animalCopy);

  // Use parameters to find correct animal.
  const animal: Animal | null = useParameters(animals);

  // Hunger Status
  const isHungry: boolean = checkHunger(animal);

  return animal ? (
    <>
      <Wrapper>
        {isHungry ? (
          <ZooButton
            variant="danger"
            handleClick={() =>
              feedAnimal(animal, animals, setAnimals, setHungryAnimals)
            }>
            Hungry - Click to feed
          </ZooButton>
        ) : (
          <ZooButton disabled>Well fed</ZooButton>
        )}
        <AnimalComponent animal={animal} large={true}></AnimalComponent>
      </Wrapper>
      {hungryAnimals.length > 0 && (
        <NotificationComponent></NotificationComponent>
      )}
    </>
  ) : (
    <h1>
      The pet has unfortunately escaped the Zoo and <b>Cannot be found</b>
    </h1>
  );
};

export { AnimalDetails };
