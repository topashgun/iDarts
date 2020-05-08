import React, { Component } from 'react';
import PriceWithScrip from './PriceWithScrip'
import SharesIndex from './SharesIndex'
import QtyCostAmt from './QtyCostAmt'
import MarketValue from './MarketValue'
import UnrealisedPL from './UnrealisedPL'
import BuySell from './BuySell'

class DataRow extends Component {

    render() {
        return (
            <div className="col-12 mb-2 dataRow">
                <div className="row">
                    <div className="col-6 col-sm-1">
                        <PriceWithScrip Scrip={this.props.jsondata.Scrip} Quantity={this.props.jsondata.Quantity} Price={this.props.jsondata.Price}></PriceWithScrip>
                    </div>
                    <div className="col-6 col-sm-1">
                        <SharesIndex index={this.props.jsondata.index}></SharesIndex>
                    </div>
                    <div className="col-12 col-sm-3">
                        <QtyCostAmt Quantity={this.props.jsondata.Quantity} AvgCost={this.props.jsondata.AvgCost} InvestedAmount={this.props.jsondata.InvestedAmount}></QtyCostAmt>
                    </div>
                    <div className="col-12 mt-1 col-sm-3 m-sm-0">
                        <MarketValue Quantity={this.props.jsondata.Quantity} Price={this.props.jsondata.Price} InvestedAmount={this.props.jsondata.InvestedAmount} OfPortfolioValue={this.props.jsondata.OfPortfolioValue}></MarketValue>
                    </div>
                    <div className="col-12 mt-1 col-sm-3 m-sm-0">
                        <UnrealisedPL UnrealizedPL={this.props.jsondata.UnrealizedPL} Return={this.props.jsondata.Return}></UnrealisedPL>
                    </div>
                    <div className="col-12 mt-1 col-sm-1 m-sm-0">
                        <BuySell></BuySell>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataRow;