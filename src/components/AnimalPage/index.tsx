import React from "react";
import { useParams } from "react-router-dom";

const AnimalPage: React.FC = () => {
  const animalID = useParams();

  return <h1>{`Animal: ${animalID.id}`}</h1>;
};

export { AnimalPage };
