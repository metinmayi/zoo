import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { Animal } from "./models/Animal";
import { ZooContext } from "./context/zooContext";
import { checkHunger } from "./components/AnimalDetails/helpers";
import { fetchNewAnimals } from "./api/fetch";

const App: React.FC = () => {
  // Get the stored animals and set them to a state.
  let animals: Animal[] = JSON.parse(localStorage.getItem("zoo") || "[]");
  const [animalArray, setAnimalArray] = useState(animals);

  // Check for hungry animals and set them to a state
  const hungryAnimals: Animal[] = animals.filter(
    (animal) => checkHunger(animal, true) && animal
  );
  const [hungryAnimal, setHungryAnimal] = useState(hungryAnimals);

  if (!localStorage.getItem("zoo")) {
    const bajs = async () => {
      const fetchedAnimals: Animal[] = await fetchNewAnimals();
      setAnimalArray(fetchedAnimals);
      const hungryAnimals: Animal[] = fetchedAnimals.filter(
        (animal) => checkHunger(animal, true) && animal
      );
      setHungryAnimal(hungryAnimals);
    };
    bajs();
  }

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
