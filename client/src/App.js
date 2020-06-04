import React, {
  PureComponent
} from "react";
import {
  render
} from "react-dom";
import BankBalanceStore from "./store/BankBalanceStore";
import BankActions from "./actions/BankActions";

class App extends PureComponent {

  constructor() {
    super(...arguments);

    BankActions.createAccount();

    this.state = {
      balance: BankBalanceStore.addListener()
    }
  }

}
render( < App / > , document.getElementById("root"));