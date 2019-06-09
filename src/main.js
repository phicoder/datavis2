import Vue from 'vue'
import App from './App'
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import loadTree from 'highcharts/modules/treemap';

loadTree(Highcharts);

Vue.use(VueHighcharts, { Highcharts });

new Vue({
    el: '#app',
    render: h => h(App)
})