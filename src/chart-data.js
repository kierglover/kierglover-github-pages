export const trackingChartData = {
    type: 'line',
    data: {
      labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        { // one line graph
          label: 'Monthly Total Revenue',
          data: [0, 0, 0, 0],
          backgroundColor: [
            'rgba(255,56,96,.5)', // Red
          ],
          borderColor: [
            '#ff3860',
          ],
          borderWidth: 3
        },
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
            suggestedMax: 1000
          }
        }]
      }
    }
  }
  
  export default trackingChartData;