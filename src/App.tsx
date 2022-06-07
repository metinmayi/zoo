import React from "react";
import { Outlet } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";

const App: React.FC = () => {
  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <Outlet />
    </div>
  );
};

export default App;
