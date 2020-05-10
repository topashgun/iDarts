import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Store from './store';
let DoughnutDataState;
let options;

export default class App extends React.Component {
    componentWillMount() {
        let etf = 0, mf = 0;
        Store.getState().jsonData.map(jsonItem => {
            if (jsonItem.type == "ETF") {
                etf = etf + parseFloat(jsonItem.InvestedAmount.replace("$", "").replace(",", ""));
            } else {
                mf = mf + parseFloat(jsonItem.InvestedAmount.replace("$", "").replace(",", ""));
            }
        })
        DoughnutDataState = {
            labels: ['Mutual Funds', 'ETFs'],
            datasets: [
                {
                    backgroundColor: ['#48bdc0', '#a2b780'],
                    data: [etf, mf]
                }
            ]
        }
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        options = {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Portfolios',
                fontSize: 12
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    fontSize: 10,
                    boxWidth: 15
                },

            },
            tooltips: {
                callbacks: {
                    title: function (tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                    label: function (tooltipItem, data) {
                        var dataset = data['datasets'][0];
                        return formatter.format(dataset['data'][tooltipItem['index']])
                    }
                }
            }
        }
    }
    render() {
        return (
            <div id="doughtnutDiv" style={{ height: Store.getState().populateDataDivHeight + "px" }}>
                <Doughnut data={DoughnutDataState} options={options} />
            </div>
        );
    }
}