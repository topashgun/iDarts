import React, { Component } from 'react';

class PriceWithScrip extends Component {
    render() {
        return (
            <div className="row  pt-1">
                <div className="col-12">
                    <p className="text-center scripClass m-0">{this.props.Scrip}</p>
                </div>
                <div className="col-12">
                    <p className="text-center priceClass m-0">{this.props.Price}</p>
                </div>
                {/* <div className="col-4 text-center">
                    <i className="fas fa-bars barsIcon"></i>
                </div> */}
            </div>
        )
    }
}

export default PriceWithScrip;