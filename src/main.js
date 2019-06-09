import Vue from 'vue'
import App from './App'
import VueHighcharts from 'vue-highcharts'
import Highcharts from 'highcharts'
import loadTree from 'highcharts/modules/treemap'
import highchartsMore from 'highcharts/highcharts-more'

loadTree(Highcharts)
highchartsMore(Highcharts)

Vue.use(VueHighcharts, {Highcharts})

new Vue({
    el: '#app',
    render: h => h(App)
})