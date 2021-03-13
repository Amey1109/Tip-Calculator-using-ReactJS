import React from "react";
export default class InputValues extends React.Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <div className="internal">
        <input
          placeholder="What's your bill amount ?"
          style={{ marginLeft: "2%", padding: "0.5%" }}
          value={this.props.allInputs.amountValues}
          onChange={this.props.handleChangeAmount}
        />

        <label style={{ marginLeft: "2%" }}>How was the service ?</label>
        <select
          style={{ marginLeft: "2%", padding: "0.5%" }}
          name="Service"
          value={this.props.allInputs.serviceValue}
          onChange={this.props.handleChangeService}
        >
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Bad">Bad</option>
        </select>

        <input
          placeholder="Whats your name ?"
          style={{ marginLeft: "2%", marginTop: "2%", padding: "0.5%" }}
          value={this.props.allInputs.customerNameValue}
          onChange={this.props.handleChangeName}
        />

        <input
          style={{
            marginLeft: "2%",
            marginTop: "2%",
            padding: "0.5%",
            paddingLeft: "41%",
            paddingRight: "41%",
            marginBottom: "1%",
          }}
          type="Button"
          value="CALCULATE TIP"
          onClick={this.props.handleClick}
        />
      </div>
    );
  }
}
