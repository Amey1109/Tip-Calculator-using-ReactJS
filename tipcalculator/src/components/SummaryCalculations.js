import React from "react";
export default class SummaryCalculations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="internal">
        <h3 style={{ textAlign: "center" }}>Customer Names and their Tips</h3>
        <ul>
          {this.props.Summary.map((item) => (
            <li>
              {item[0]} Offered {item[1]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
