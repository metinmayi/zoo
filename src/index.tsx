import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AnimalContainer } from "./components/AnimalsContainer";
import { AnimalComponent } from "./components/AnimalComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<AnimalContainer />} />
          <Route path="/:id" element={<AnimalComponent />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
