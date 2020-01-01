import React from 'react';
import "./ingredients.style.css";

const ingredients = (props) => {
  let ingredient = null;
  ingredient = <div>sdsd</div>
  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <div>sdsd</div>;
      break;
    case ('bread-top'):
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>;
          <div className="Seeds2"></div>;
        </div>
      );
      break;
    case ('meat'):
      ingredient = <div className="Meat"></div>;
      break;
    case ('cheese'):
      ingredient = <div className="Cheese"></div>;
      break;
    case ('bacon'):
      ingredient = <div className="Bacon"></div>;
      break;
    case ('salad'):
      ingredient = <div className="Salad"></div>;
      break;
    default:
      ingredient = null;
  }
};

export default ingredients;