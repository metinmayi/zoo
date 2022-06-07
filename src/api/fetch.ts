import { Animal } from "../models/Animal";

// In a real project this would be a proper fetch.
const getStoredAnimals = () => {
  const storedAnimals: string = localStorage.getItem("zoo") || "[]";
  const animals: Animal[] = JSON.parse(storedAnimals);
  return animals;
};

const fetchNewAnimals = async () => {
  const result = await fetch("https://animals.azurewebsites.net/api/animals");
  const data = await result.json();
  localStorage.setItem("zoo", JSON.stringify(data));
};

export { getStoredAnimals, fetchNewAnimals };
