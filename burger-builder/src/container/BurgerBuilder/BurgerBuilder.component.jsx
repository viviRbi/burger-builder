import React, { Component } from "react";
import "./BurgerBuilder.style.css";
import Aux from "../../hoc/Aux";
import Burger from "../../component/burger/burger.component"

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 1
      }
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Control</div>
      </Aux>
    );
  }
}
export default BurgerBuilder;