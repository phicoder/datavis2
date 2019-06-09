import Highcharts from 'highcharts'

import themeLight from './themes/theme_light.json'
import themeDark from './themes/theme_dark.json'

import chart0 from './chart0.json'
import chart1 from './chart1.json'
import chart2 from './chart2.json'
import chart3 from './chart3.js'
import chart4 from './chart4.json'
import chart5 from './chart5.js'
import chart6 from './chart6.json'
import chart7 from './chart7.json'
import chart8 from './chart8.json'
import chart9 from './chart9.json'

export default [
    Highcharts.merge(chart0, themeLight),
    Highcharts.merge(chart1, themeLight),
    Highcharts.merge(chart2, themeDark),
    Highcharts.merge(chart3, themeDark),
    Highcharts.merge(chart4, themeLight),
    Highcharts.merge(chart5, themeDark),
    Highcharts.merge(chart6, themeDark),
    Highcharts.merge(chart7, themeDark),
    Highcharts.merge(chart8, themeLight),
    Highcharts.merge(chart9, themeLight),
]