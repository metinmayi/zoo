import { Animal } from "../models/Animal";

// In a real project this would be a proper fetch.
const getStoredAnimals = (): Animal[] => {
  const storedAnimals: string = localStorage.getItem("zoo") || "[]";
  const animals: Animal[] = JSON.parse(storedAnimals);
  return animals;
};

const fetchNewAnimals = async () => {
  const result = await fetch("https://animals.azurewebsites.net/api/animals");
  const data = await result.json();
  syncIdWithIndex(data);
  localStorage.setItem("zoo", JSON.stringify(data));
  return data;
};

const syncIdWithIndex = (animals: Animal[]): Animal[] => {
  animals.forEach((animal, index) => (animal.id = index));
  return animals;
};

export { getStoredAnimals, fetchNewAnimals };
