import React from "react";
import { useZooContext } from "../../context/zooContext";
import { checkHunger } from "../AnimalDetails/helpers";
import { Wrapper } from "./wrapper";

const NotificationComponent: React.FC = () => {
  const { hungryAnimals } = useZooContext();
  return hungryAnimals.length > 0 ? (
    <Wrapper>
      <p>The following animals urgently need to be fed:</p>
      <ul>
        {hungryAnimals.map(
          (animal) =>
            checkHunger(animal, true) && <li key={animal.id}>{animal.name}</li>
        )}
      </ul>
    </Wrapper>
  ) : null;
};

export { NotificationComponent };
