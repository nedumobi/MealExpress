import { useState } from "react";
import "./App.css";
import Productlist from "./component/Productlist";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
      <Productlist />
      <h1> Welcome to MealExpress</h1>
      <h5>Your ultimate food experience</h5>
    </div>
  );
}

export default App;
