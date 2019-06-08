<template>
    <div class="font-sans">
        <!-- header -->
        <section id="header" class="-pb-1 h-40 md:h-56 text-2xl md:text-4xl">
            <h1 class="text-center sm:text-left text-white pt-12 sm:pl-8 mx-4 font-normal">Is Data Visualization worth
                it?</h1>
        </section>

        <!-- section1 -->
        <section class="flex flex-wrap py-16">
            <div class="w-full sm:w-1/2 px-4 flex flex-col mb-16 sm:mb-0">
                <h2 class="text-center sm:text-left text-xl mt-4 sm:ml-12">Most jobs are affected by Data
                    Visualization</h2>
                <div class="flex flex-1 items-center">
                    <highcharts class="flex-1" :options="charts[0]"></highcharts>
                </div>
            </div>
            <div class="w-full sm:w-1/2 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12">... and many jobs openings require Data Visualization even though they do not announce it!</h2>
                <highcharts :options="charts[1]"></highcharts>
            </div>
        </section>

        <!-- section2 -->
        <section class="flex flex-wrap bg-black text-white py-16">
            <div class="w-full sm:w-1/2 px-4 mb-12 sm:mb-0">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12">Many people spend many years working in Data Visualization</h2>
                <highcharts :options="charts[2]"></highcharts>
            </div>
            <div class="w-full sm:w-1/2 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12"> ... and lots of hours in their day are dedicated to Data Visualization!</h2>
                <highcharts :options="charts[3]"></highcharts>
            </div>
        </section>

        <!-- section3 -->
        <section class="py-16">
            <h2 class="text-center sm:text-left text-xl h-24 ml-12">And yet, many people would like to invest more time in it</h2>
            <highcharts :options="charts[4]"></highcharts>
        </section>


        <!-- section4 -->
        <section class="flex flex-wrap bg-black text-white py-16">
            <div class="w-full sm:w-1/3 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12">Data Visualization is highly consumed, ...</h2>
                <highcharts :options="charts[5]"></highcharts>
            </div>
            <div class="w-full sm:w-1/3 px-6">
                <h2 class="text-center text-xl h-24">...most teams are mixed, ...</h2>
                <highcharts :options="charts[6]"></highcharts>
            </div>
            <div class="w-full sm:w-1/3 pr-2">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12">and the relationship with the teams is of collaborative nature!</h2>
                <highcharts :options="charts[7]"></highcharts>
            </div>
        </section>

        <!-- section5 -->
        <section class="flex flex-wrap py-16">
            <div class="w-full sm:w-1/2 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12">Most jobs are affected by Data
                    Visualization</h2>
                <highcharts :options="charts[8]"></highcharts>
            </div>
            <div class="w-full sm:w-1/2 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12"> Data Visualization is a part of the job, most
                    people were not hired for it</h2>
                <highcharts :options="charts[9]"></highcharts>
            </div>
        </section>

        <!-- footer -->
        <section class="bg-black text-white pt-24 pb-6 px-12">
            <h1 class="text-center text-4xl pb-12">Prepare for your future now, study Data Visualization!</h1>
            <a href="http://www.ub.edu/datascience/master/"><img class="mx-auto mt-5" src="./assets/ub_logo.png" width="150"></a>
        </section>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
import charts from './charts'

export default {
    name: 'App',
    data() {
        return {
            charts: charts
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
    top: -4px;
    left: -4px;
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