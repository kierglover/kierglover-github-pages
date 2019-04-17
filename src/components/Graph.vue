<template>
    <div class="container">
        <h2 class="container__title">Working Openly</h2>
        <p class="lead">I like transparently and nice visuals, so here is my data. Transparent and visual. My current goal is to try and make <strong>$500 MRR by the end of 2019 from stuff I build in my freetime.</strong></p>
        <br>
        <br>
        <br>
        <canvas id="tracking-chart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'
import trackingChartData from '../chart-data.js'
export default {
    name: 'Graph',
    components: {},
    methods: {
        createChart(chartId, chartData) {
        const ctx = document.getElementById('tracking-chart');
        const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        }
    },
    mounted() {
        this.createChart('tracking-chart', this.trackingChartData);
    },
    data() {
        return {
            trackingChartData: trackingChartData,
        }
    }
}
</script>

<style lang="sass" scoped>
$darkest: #3d4852;
$grey: #b8c2cc;
$light-grey: #f8fafc;

@mixin element-padding {
     padding: 3em;
}
    .container {
        @include element-padding;
        &__title {
            font-size: 1.5em;
            color: $darkest;
            font-weight: bold;
        }
    }

     .lead {
         width: 50%;
     }

</style>

</style>
