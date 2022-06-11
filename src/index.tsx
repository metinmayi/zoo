import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AnimalList } from "./components/AnimalList";
import { AnimalDetails } from "./components/AnimalDetails";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<AnimalList />} />
          <Route path="/:id" element={<AnimalDetails />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
