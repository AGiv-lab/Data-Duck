'use strict';

let state = new AppState();
state.loadItems();

let labels = [];
let votes = [];

for (let i = 0; i < state.allProducts.length; i++) {
  labels.push(state.allProducts[i].name);
  votes.push(state.allProducts[i].timesClicked);
}

let chartData = {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Votes per Product',
      data: votes,
      backgroundColor: 'rgba(200, 160, 80, 0.7)',
      borderColor: '#C49A2C',
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#FFD966',
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#FFFFFF',
          font: {
            size: 18,
            weight: 'bold'
          },
          maxRotation: 45,
          minRotation: 45
        },
        grid: {
          color: 'rgba(255,255,255,0.08)'
        }
      },
      y: {
        ticks: {
          color: '#f88787',
          font: {
            size: 18,
            weight: 'bold'
          }
        },
        grid: {
          color: 'rgba(255,255,255,0.08)'
        }
      }
    }
  }
};

let ctx = document.getElementById('chart');
new Chart(ctx, chartData);