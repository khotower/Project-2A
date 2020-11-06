var tableData = data;

console.log(tableData);
var year=[];
var birth=[];
// var year=[];
// var birth=[];
for (let i=0;i<tableData.length;i++){
  year.push(tableData[i].year)
  birth.push(tableData[i].births)
}


var yearChart = {
  x: year,
  y: birth,
  mode: 'markers',
  type: 'scatter'
};

var layout = {
  title: {
    text:'Average Number of Births per day',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Year',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Average No of Births',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

var data = [yearChart];

Plotly.newPlot('myDiv', data, layout);