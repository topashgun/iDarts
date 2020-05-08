import React, { Component } from 'react';

class SharesIndex extends Component {
    render() {
        return (
            <div className="row pt-1">
                <div className="col-12">
                    <p className="m-0 isharesClass">iShares</p>
                    <p className="m-0 indexClass">{this.props.index}</p>
                </div>
            </div>
        )
    }
}

export default SharesIndex;