import React, { Component } from 'react';

class BuySell extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-block btn-outline-warning buySellButton">BUY</button>
                <button type="button" className="btn btn-block btn-outline-warning buySellButton">SELL</button>
            </div>
        )
    }
}

export default BuySell;