<template>
<div>
    <div class="container">
        <h2 class="subtitle">👐 Working Openly</h2>
        <p>I like transparently and nice visuals, so here is my data. Transparent and visual.</p>
        <br>
        <br>
        <br>
        <canvas id="tracking-chart"></canvas>
    </div>
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
         .subtitle {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 15px;
     }

</style>

</style>
