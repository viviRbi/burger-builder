import React, { Component } from "react";
import "./BurgerBuilder.style.css";
import Aux from "../../hoc/Aux";
import Burger from "../../component/burger/burger.component"

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Control</div>
      </Aux>
    );
  }
}
export default BurgerBuilder;