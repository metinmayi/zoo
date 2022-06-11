import { createContext, useContext } from "react";
import { Animal } from "../models/Animal";

type zooContextType = {
  animals: Animal[];
  setAnimals: Function;
  hungryAnimals: Animal[];
  setHungryAnimals: Function;
};

export const ZooContext = createContext<zooContextType>({
  animals: [],
  setAnimals: () => {},
  hungryAnimals: [],
  setHungryAnimals: () => {},
});

export const useZooContext = () => useContext(ZooContext);
