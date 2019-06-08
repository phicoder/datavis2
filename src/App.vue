<template>
    <div class="font-sans">
        <section id="header" class="-pb-1 h-40 md:h-56 text-2xl md:text-4xl">
            <h1 class="text-center sm:text-left text-white pt-12 sm:pl-8 mx-4">Is Data Visualization worth it?</h1>
        </section>
        <!-- top section -->
        <section class="flex my-2">
            <div class="w-full sm:w-1/2 my-auto mx-4">
                <p>Most jobs are affected by Data Visualization</p>
                <highcharts :options="chartOptions"></highcharts>
            </div>
            <div class="w-full sm:w-1/2 my-auto mx-4">
                <p> Data Visualization is a part of the job, most people were not hired for it</p>
                <div>
                    This is a graph
                    <highcharts :options="chartOptions"></highcharts>
                </div>
            </div>
        </section>
        <!-- section1 -->
        <section class="h-64 bg-black text-white">

        </section>
        <!-- section2 -->
        <section class="h-64 flex">
            <div class="w-1/2">

            </div>
            <div class="w-1/2">

            </div>
        </section>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
    name: 'App',
    data() {
        return {
            chartOptions: {
                series: [{
                    data: [1,2,3] // sample data
                }]
            }
        }
    },
    components: {
        highcharts: Chart
    }
}
</script>

<style lang="scss" scoped>
#header {
    @apply overflow-hidden shadow-xl;
    position: relative;
}

#header::before {
    content: "";
    position: absolute;
    top: -4px; left: -4px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: url(./assets/datavis.jpg);
    background-size: auto 130%;
    background-repeat: no-repeat;
    background-position: center top;

    filter: grayscale(100%) blur(2px) brightness(0.5);

    @screen sm {
        background-size: 100%;
    }
}

#header > * {
    position: relative;
}
</style>