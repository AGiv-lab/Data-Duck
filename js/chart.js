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
      backgroundColor: '#FFD966',
      borderColor: '#FFC107',
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
          size: 13
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
        color: '#FFFFFF',
        font: {
          size: 13
        }
      },
      grid: {
        color: 'rgba(255,255,255,0.08)'
      }
    }
  }
}