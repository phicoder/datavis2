<template>
    <div class="font-sans">
        <!-- header -->
        <section id="header" class="-pb-1 h-40 md:h-56 text-2xl md:text-4xl">
            <h1 class="text-center sm:text-left text-white pt-12 sm:pl-8 mx-4 font-normal">Is Data Visualization worth
                it?</h1>
        </section>

        <!-- section1 -->
        <section class="flex flex-wrap mb-2 mt-6">
            <div class="w-full sm:w-1/2 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12">Most jobs are affected by Data
                    Visualization</h2>
                <highcharts :options="charts[0]"></highcharts>
            </div>
            <div class="w-full sm:w-1/2 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12"> Data Visualization is a part of the job, most
                    people were not hired for it</h2>
                <highcharts :options="charts[1]"></highcharts>
            </div>
        </section>

        <!-- section2 -->
        <section class="bg-black text-white">
            <div class="w-full sm:w-1/2 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12">Most jobs are affected by Data
                    Visualization</h2>
                <highcharts :options="charts[2]"></highcharts>
            </div>
            <div class="w-full sm:w-1/2 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12"> Data Visualization is a part of the job, most
                    people were not hired for it</h2>
                <highcharts :options="charts[3]"></highcharts>
            </div>
        </section>

        <!-- section3 -->
        <section class="bg-black text-white">
            <h2 class="text-center sm:text-left text-xl h-24 ml-12">Most jobs are affected by Data Visualization</h2>
            <highcharts :options="charts[4]"></highcharts>
        </section>


        <!-- section4 -->
        <section class="bg-black text-white">
            <div class="w-full sm:w-1/3 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12">Most jobs are affected by Data
                    Visualization</h2>
                <highcharts :options="charts[5]"></highcharts>
            </div>
            <div class="w-full sm:w-1/3 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12">Most jobs are affected by Data
                    Visualization</h2>
                <highcharts :options="charts[6]"></highcharts>
            </div>
            <div class="w-full sm:w-1/3 px-4">
                <h2 class="text-center sm:text-left text-xl h-24 ml-12"> Data Visualization is a part of the job, most
                    people were not hired for it</h2>
                <highcharts :options="charts[7]"></highcharts>
            </div>
        </section>

        <!-- section5 -->
        <section class="bg-black text-white">
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
        <section class="bg-black text-white">
            <h1 class="text-center mx-5 text-4xl"></h1>
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