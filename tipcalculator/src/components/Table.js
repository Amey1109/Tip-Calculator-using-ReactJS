import React  from 'react'
export default class Table extends React.Component {
    constructor(props) {
        super(props)
    
    }

    render(){
        return(
            <div className="internal">
          <table style={{ width: "100%", margin: "0.8%" }}>
            <th>Total Customer</th>
            <th>Tip</th>
            <tr>
              <td style={{ textAlign: "center" }}>{this.props.Tip.length}</td>
              <td style={{ textAlign: "center" }}>
                {this.props.Tip.reduce((a, b) => a + b, 0)}
              </td>
            </tr>
          </table>
        </div>
    
        )
    }
    
}