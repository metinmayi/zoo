import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { Animal } from "./models/Animal";
import { ZooContext } from "./context/zooContext";
import { checkHunger } from "./components/AnimalDetails/helpers";

const App: React.FC = () => {
  // Get the stored animals and set them to a state.
  const animals: Animal[] = JSON.parse(localStorage.getItem("zoo") || "[]");
  const [animalArray, setAnimalArray] = useState(animals);

  // Check for hungry animals and set them to a state
  const hungryAnimals: Animal[] = animals.filter(
    (animal) => checkHunger(animal, true) && animal
  );
  const [hungryAnimal, setHungryAnimal] = useState(hungryAnimals);

  return (
    <ZooContext.Provider
      value={{
        animals: animalArray,
        setAnimals: setAnimalArray,
        hungryAnimals: hungryAnimal,
        setHungryAnimals: setHungryAnimal,
      }}>
      <div className="App">
        <SiteHeader></SiteHeader>
        <Outlet />
      </div>
    </ZooContext.Provider>
  );
};

export default App;
