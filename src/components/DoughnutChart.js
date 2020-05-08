import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


const state = {
    labels: ['Mutual Funds', 'ETFs'],
    datasets: [
        {
            backgroundColor: ['#48bdc0', '#a2b780'],
            data: []
        }
    ]
}
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
const options = {
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
                console.log(dataset)
                return formatter.format(dataset['data'][tooltipItem['index']])
            }
        }
    }
}

export default class App extends React.Component {
    render() {
        let valueArray = []
        valueArray.push(this.props.etf);
        valueArray.push(this.props.mf);
        state.datasets[0].data = valueArray;
        return (
            <div id="doughtnutDiv" style={{ height: this.props.heightofchart + "px" }}>
                <Doughnut data={state} options={options} />
            </div>
        );
    }
}