import Highcharts from 'highcharts'

const colors = (function () {
    let colors = [],
        base = Highcharts.getOptions().colors[0],
        i

    for (i = 0; i < 4; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get())
    }
    return colors
}())

export default {
    "series": [
        {
            "type": "treemap",
            "layoutAlgorithm": "stripes",
            "alternateStartingDirection": true,
            "tooltip": {
                pointFormatter() {
                    return this.name + " " + (100 * this.value / this.series.tree.childrenTotal).toFixed(0) + " %"
                }
            },
            plotOptions: {
                series: {
                    colors: colors
                }
            },
            "data": [
                {
                    "id": "A"
                },
                {
                    "id": "B"
                },
                {
                    type: "series",
                    "name": "One quarter of the day",
                    "value": 593,
                    "parent": "A",
                    dataLabels: {
                        style: {
                            fontSize: "1.5rem",
                            textOverflow: "clip"
                        }
                    },
                    color: colors[4]
                },
                {
                    "name": "Half of the day",
                    "value": 235,
                    "parent": "B",
                    dataLabels: {
                        style: {
                            fontSize: "1.25rem",
                            textOverflow: "clip"
                        }
                    },
                    color: colors[2]
                },
                {
                    "name": "Three quarters of the day",
                    "value": 53,
                    "parent": "B",
                    dataLabels: {
                        style: {
                            fontSize: "1rem",
                            textOverflow: "clip"
                        }
                    },
                    color: colors[1]
                },
                {
                    "name": "More than three quarters of the day",
                    "value": 36,
                    "parent": "B",
                    dataLabels: {
                        style: {
                            fontSize: "0.7rem",
                            textOverflow: "clip",
                        }
                    },
                    color: colors[0]
                }
            ]
        }
    ],
    "title": {
        "text": ""
    }
}