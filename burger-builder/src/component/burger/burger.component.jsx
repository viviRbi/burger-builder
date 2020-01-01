import React from "react";
import "./burger.style.css";
import Ingredient from "./ingredients/ingredients.component";

const burger = (props) => {
  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      <Ingredient type="cheese" />
      <Ingredient type="meat" />
      <Ingredient type="bread-bottom" />
    </div>
  )
}
export default burger;