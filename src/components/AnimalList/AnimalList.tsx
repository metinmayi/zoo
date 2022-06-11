import React from "react";
import { useZooContext } from "../../context/zooContext";
import { AnimalComponent } from "../AnimalComponent";
import { NotificationComponent } from "../NotificationComponent";
import { Wrapper } from "./wrapper";

const AnimalList: React.FC = () => {
  const { animals, hungryAnimals } = useZooContext();
  return (
    <>
      <Wrapper>
        {animals.map((animal) => (
          <AnimalComponent animal={animal} key={animal.id} />
        ))}
      </Wrapper>
      {hungryAnimals.length > 0 && (
        <NotificationComponent></NotificationComponent>
      )}
    </>
  );
};

export { AnimalList };
