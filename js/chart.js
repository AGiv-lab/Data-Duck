let chartData = {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Votes per Product',
      data: votes,
      backgroundColor: 'rgba(240, 200, 120, 0.7)',
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#f0a500',    // legend text color
          font: {
            size: 14           // legend text size
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#f0a500',    // x-axis label color
          font: {
            size: 12           // x-axis label size
          }
        }
      },
      y: {
        ticks: {
          color: '#f0a500',    // y-axis label color
          font: {
            size: 12           // y-axis label size
          }
        }
      }
    }
  }
};