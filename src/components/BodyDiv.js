import React, { Component } from 'react';
import JsonData from '../data/sample.json'
import DataRow from './DataRow'
import Doughnut from './DoughnutChart'
import Store from './store'
class BodyDiv extends Component {
    constructor() {
        super()
        this.state = {
            populateDataDivHeight: 0
        }
        Store.dispatch({
            type: "initialState",
            jsonData: [],
            populateDataDivHeight: 1
        });
        Store.dispatch({
            type: "setJsonData",
            jsonData: JsonData
        });
    }

    componentDidMount() {
        let etf = 0, mf = 0;
        this.setState({ etf: etf.toFixed(2), mf: mf.toFixed(2) });
    }

    componentDidUpdate() {
        if (this.state.populateDataDivHeight == 0) {
            Store.dispatch({
                type: "setHeight",
                populateDataDivHeight: document.getElementById('populateDataDiv').offsetHeight
            });
            this.setState({ populateDataDivHeight: document.getElementById('populateDataDiv').offsetHeight });
        }
    }
    render() {
        return (
            <div className="row m-0">
                <div className="col-lg-10 col-sm-12" id="populateDataDiv">
                    <div className="row">
                        {
                            Store.getState().jsonData.map((JsonItem, index) => {
                                return (
                                    <DataRow key={index} className="col-12" jsondata={JsonItem}></DataRow>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="col-lg-2 col-sm-12">
                    <Doughnut></Doughnut>
                </div>
            </div>

        )
    }
}

export default BodyDiv;