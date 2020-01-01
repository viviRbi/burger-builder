import React from "react";
import "./burger.style.css";
import Ingredient from "./ingredients/ingredients.component";

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(eachIngr => {
      console.log(eachIngr, props.ingredients[eachIngr])
      return [...Array(props.ingredients[eachIngr])]
        .map((_, i) => {
          return <Ingredient key={eachIngr + i} type={eachIngr} />
        });
    });
  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  )
}
export default burger;