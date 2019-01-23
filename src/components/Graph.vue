<template>
    <div class="container">
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

<style lang="sass"></style>

</style>
