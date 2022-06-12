import { useParams } from "react-router-dom";
import { Animal } from "../../models/Animal";

/**
 * Takes an animal and checks whether it has been feed within four hours or not.
 * @param animal
 * @param urgency If urgent, checks for 4 hours. Else check for 3 hours
 * @returns True/False
 */
const checkHunger = (
  animal: Animal | null,
  urgency: boolean = false
): boolean => {
  if (!animal) return false;

  const now: number = +new Date();
  const lastFed: number = +new Date(animal.lastFed);
  const difference: number = now - lastFed;
  const differenceInHours: number = difference / 1000 / 60 / 60;
  if (urgency) return differenceInHours >= 4;
  return differenceInHours >= 3;
};

/**
 * Marks an animal as fed and sets the current time to lastfed. Updates the state of Animals and HungryAnimals
 * @param animal
 * @param animals
 * @param setAnimals
 * @param setHungryAnimals
 * @returns void
 */
const feedAnimal = (
  animal: Animal,
  animals: Animal[],
  setAnimals: Function,
  setHungryAnimals: Function
) => {
  if (!animal) return;
  animal.lastFed = new Date().toString();
  animal.isfed = true;
  const newAnimals = [...animals];
  const newHungryAnimals = newAnimals.filter((animal) =>
    checkHunger(animal, true)
  );
  setAnimals(newAnimals);
  setHungryAnimals(newHungryAnimals);
  localStorage.setItem("zoo", JSON.stringify(newAnimals));
};

// Takes the parameters of the URL and finds the corresponding animal from the list.
const useParameters = (animals: Animal[]): Animal | null => {
  const { id } = useParams();
  let animal: Animal | null;
  id ? (animal = animals[+id]) : (animal = null);
  return animal;
};

export { feedAnimal, checkHunger, useParameters };
