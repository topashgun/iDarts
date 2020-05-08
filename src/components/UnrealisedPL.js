import React, { Component } from 'react';

class UnrealisedPL extends Component {

    calculateNegativeWidth(width) {
        let returnWidth = 0;
        width.substring(0, 1) == "-"
            ? returnWidth = width.substring(1)
            : returnWidth = '0%'

        return returnWidth;
    }
    calculatePositiveWidth(width) {
        let returnWidth = 0;
        width.substring(0, 1) == "-"
            ? returnWidth = '0%'
            : returnWidth = width

        return returnWidth;
    }
    render() {
        return (
            <div className="row">
                <div className="col-6 https://gentle-sea-00383.herokuapp.com">
                    <p className="m-0 marketValue">Unrealized P/L</p>
                </div>
                <div className="col-6">
                    <p className="m-0 marketValue text-right">{this.props.UnrealizedPL}</p>
                </div>
                <div className="col-12 mt-1">
                    <p className="m-0 portfolioValue">% Return <span className="float-right">{this.props.Return.substring(0, 1) == "-" ? <i className="fas fa-caret-down text-danger upDownCaret"></i> : <i className="fas fa-caret-up text-success upDownCaret"></i>}{this.props.Return}</span></p>
                    <div className="row">
                        <div className="col-6 pr-0">
                            <div className="progress ofPortfolioValueProgress borderRightRadiusZero justify-content-end">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: this.calculateNegativeWidth(this.props.Return) }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-6 pl-0">
                            <div className="progress ofPortfolioValueProgress borderLeftRadiusZero">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: this.calculatePositiveWidth(this.props.Return) }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UnrealisedPL;