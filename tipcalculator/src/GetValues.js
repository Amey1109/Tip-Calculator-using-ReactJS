import React from "react";
import InputValues from "./components/InputValues";
import SummaryCalculations from "./components/SummaryCalculations";
import Table from "./components/Table";

class GetValues extends React.Component {
  constructor() {
    super();

    this.state = {
      amountValue: "",
      serviceValue: "Excellent",
      customerNameValue: "",
      currentTip: "",
      customerNameValueArray: [],
      nameAndTipArray: [], // [[name,tip]...]
      tip: [], 
    };
  }

  handleChangeAmount = (e) => {
    this.setState({ amountValue: e.target.value });
  };

  handleChangeService = (e) => {
    this.setState({ serviceValue: e.target.value });
  };

  handleChangeName = (e) => {
    this.setState({ customerNameValue: e.target.value });
  };

  handleClick = () => {
    let billAmount = Number(this.state.amountValue);

    let servicePercentage = 0;

    if (this.state.serviceValue === "Excellent") {
      servicePercentage = 20;
    } else if (this.state.serviceValue === "Good") {
      servicePercentage = 15;
    } else if (this.state.serviceValue === "Bad") {
      servicePercentage = 10;
    } else {
      return;
    }

    this.setState({
      currentTip: billAmount * (servicePercentage / 100),
      tip: [...this.state.tip, billAmount * (servicePercentage / 100)],
      customerNameValueArray: [
        ...this.state.customerNameValueArray,
        this.state.customerNameValue,
      ],
      nameAndTipArray: [
        ...this.state.nameAndTipArray,
        [this.state.customerNameValue, billAmount * (servicePercentage / 100)],
      ],
    });

    

    
  };

  render() {
    return (
      <div className="container">
        <InputValues
          allInputs={this.state}
          handleChangeAmount={this.handleChangeAmount}
          handleChangeName={this.handleChangeName}
          handleChangeService={this.handleChangeService}
          handleClick={this.handleClick}
        />

        {this.state.nameAndTipArray.length > 0 && (
          <SummaryCalculations Summary={this.state.nameAndTipArray} />
        )}

        {this.state.tip.length > 0 && <Table Tip={this.state.tip} />}
      </div>
    );
  }
}

export default GetValues;
