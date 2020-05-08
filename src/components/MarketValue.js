import React, { Component } from 'react';

class MarketValue extends Component {
    constructor(props) {
        super(props)
        this.calculateMarketValue = this.calculateMarketValue.bind(this);
    }
    calculateMarketValue() {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        let quantity = parseFloat(this.props.Quantity);
        let price = parseFloat(this.props.Price.replace("$", "").replace(",", ""));
        let marketValue = quantity * price;
        console.log("marketValue : " + marketValue);
        return formatter.format(marketValue);
    }
    render() {
        return (
            <div className="row">
                <div className="col-6 https://gentle-sea-00383.herokuapp.com">
                    <p className="m-0 marketValue">Market Value</p>
                </div>
                <div className="col-6">
                    <p className="m-0 marketValue text-right">{this.calculateMarketValue()}</p>
                </div>
                <div className="col-12 mt-1">
                    <p className="m-0 portfolioValue">% of portfolio value <span className="float-right">{this.props.OfPortfolioValue}</span></p>
                    <div className="progress ofPortfolioValueProgress">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${this.props.OfPortfolioValue}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketValue;