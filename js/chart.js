'use strict';

let canvasElem = document.getElementById('chart');

function renderChart() {
  let state = new AppState();
  state.loadItems();

  let labels = state.allProducts.map(function(product) { 
    return product.name; 
  }); 

  let votes = state.allProducts.map(function(product) { 
    return product.timesClicked; 
  });

  let chartData = {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Votes per Product',
        data: votes,
        backgroundColor: '#f1c870',
      }]
    }
  };

  new Chart(canvasElem, chartData);
}

renderChart();