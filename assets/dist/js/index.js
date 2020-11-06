
// TESTER = document.getElementById('tester');

// Plotly.newPlot( TESTER, [{
// x: [1, 2, 3, 4, 5,30,40,52],
// y: [1, 2, 4, 8, 16,20,15,12] }], {
// margin: { t: 0 } } );



var tableData = data;
var Charttitle_def = 'Years with highest number of births'
console.log(tableData);
var year1=[];
var birth1=[];
// var year=[];
// var birth=[];
for (let i=0;i<tableData.length;i++){
  year1.push(tableData[i].year)
  birth1.push(tableData[i].births)
}


var tableData2 = data2;
var year2=[];
var birth2=[];

for (let i=0;i<tableData2.length;i++){
  year2.push(tableData2[i].year)
  birth2.push(tableData2[i].births)
}

var lowestElement=document.getElementById("Lowest")
lowestElement.addEventListener("click", function(){
  Charttitle2 = 'Years with lowest number of births'
  barchart(year2,birth2,Charttitle2);
})

var highestelement=document.getElementById("Highest")
highestelement.addEventListener("click", function(){
  Charttitle1 = 'Years with highest number of births'
  barchart(year1,birth1,Charttitle1);
  
  
})
function barchart(year,birth, Charttitle){

var data1 = [
  {
    x: year,
    y: birth,
    type: 'bar'
  }
];

var layout = {
  title: {
    text:Charttitle,
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
      text: 'No of Births',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

Plotly.newPlot("myDiv", data1,layout);
}

barchart(year1,birth1,Charttitle_def);