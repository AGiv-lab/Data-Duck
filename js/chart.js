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
      backgroundColor: 'rgba(240, 200, 120, 0.7)',
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: '#f0a500',
          font: {
            size: 14
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#f0a500',
          font: {
            size: 12
          }
        }
      },
      y: {
        ticks: {
          color: '#f0a500',
          font: {
            size: 12
          }
        }
      }
    }
  }
};

let ctx = document.getElementById('chart');
new Chart(ctx, chartData);
