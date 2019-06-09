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
                format: '{point.name}',
            }
        }
    },

    series: [{
        data: [
            {
                name: "Hourly",
                x: 0,
                y: 50,
                z: 53
            },
            {
                name: "Daily",
                x: 10,
                y: 50,
                z: 263
            },
            {
                name: "Weekly",
                x: 20,
                y: 50,
                z: 324
            },
            {
                name: "Monthly",
                x: 0,
                y: 0,
                z: 214
            },
            {
                name: "Quarterly",
                x: 10,
                y: 0,
                z: 78
            },
            {
                name: "Yearly",
                x: 20,
                y: 0,
                z: 21,
                dataLabels: {
                    y: -20
                }
            }
        ]
    }]

}