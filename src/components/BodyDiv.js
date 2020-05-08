import React, { Component } from 'react';
import JsonData from '../data/sample.json'
import DataRow from './DataRow'
import Doughnut from './DoughnutChart'
class BodyDiv extends Component {
    constructor() {
        super()
        this.state = {
            jsonData: [],
            populateDataDivHeight: 0,
            etf: 0,
            mf: 0
        }
    }

    componentDidMount() {
        this.setState({ jsonData: JsonData });
        let etf = 0, mf = 0;
        JsonData.map(jsonItem => {
            if (jsonItem.type == "ETF") {
                etf = etf + parseFloat(jsonItem.InvestedAmount.replace("$", "").replace(",", ""));
            } else {
                mf = mf + parseFloat(jsonItem.InvestedAmount.replace("$", "").replace(",", ""));
            }
        })
        this.setState({ etf: etf.toFixed(2), mf: mf.toFixed(2), });
        console.log(document.getElementById('populateDataDiv').offsetHeight)
    }

    componentDidUpdate() {
        if (this.state.populateDataDivHeight == 0) {
            this.setState({ populateDataDivHeight: document.getElementById('populateDataDiv').offsetHeight });
        } else {
            console.log("else");
        }
    }
    render() {
        return (
            <div className="row m-0">
                <div className="col-lg-10 col-sm-12" id="populateDataDiv">
                    <div className="row">
                        {
                            this.state.jsonData.map((JsonItem, index) => {
                                return (
                                    <DataRow key={index} className="col-12" jsondata={JsonItem}></DataRow>
                                )

                            })
                        }

                    </div>
                </div>
                <div className="col-lg-2 col-sm-12" style={{ height: this.state.populateDataDivHeight }}>
                    {(this.state.etf === 0 && this.state.mf === 0) ? '' : <Doughnut etf={this.state.etf} mf={this.state.mf} heightofchart={this.state.populateDataDivHeight}></Doughnut>}
                </div>
            </div>

        )
    }
}

export default BodyDiv;