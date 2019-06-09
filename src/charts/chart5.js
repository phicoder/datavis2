import Highcharts from 'highcharts'

export default {
    chart: {
        type: 'bubble',
    },
    legend: {
        enabled: false
    },
    title: {
        text: ''
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormatter() {
            return this.name + " " + (100 * this.z / this.series.zData.reduce((a, b) => a + b)).toFixed(0) + " %"
        },
        footerFormat: '</table>',
        followPointer: true
    },
    plotOptions: {
        series: {
            marker: {
                fillOpacity: 1
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: [
            {
                name: "daily",
                x: 0,
                y: 0,
                z: 5
            },
            {
                name: "hourly",
                x: 10,
                y: 0,
                z: 50
            },
            {
                name: "weekly",
                x: 20,
                y: 0,
                z: 30
            },
            {
                name: "monthly",
                x: 30,
                y: 0,
                z: 15
            }
        ]
    }]

}