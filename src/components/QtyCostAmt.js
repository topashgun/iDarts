import React, { Component } from 'react';

class QtyCostAmt extends Component {
    render() {
        return (
            <table className="table table-sm table-borderless qtyCstAmtTable mb-0">
                <tbody>
                    <tr>
                        <td className="text-right text-sm-left"><i className="fas fa-cubes"></i> Quantity</td>
                        <td>{this.props.Quantity}</td>
                    </tr>
                    <tr>
                        <td className="text-right text-sm-left"><i className="fas fa-at"></i> Average Cost</td>
                        <td>{this.props.AvgCost}</td>
                    </tr>
                    <tr>
                        <td className="text-right text-sm-left"><i className="fas fa-money-bill-wave"></i> Invested Amount</td>
                        <td>{this.props.InvestedAmount}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default QtyCostAmt;