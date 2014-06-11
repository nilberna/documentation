var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var trace1 = {
  x: [1, 2, 3], 
  y: [4, 5, 6], 
  type: "scatter"
};
var trace2 = {
  x: [20, 30, 40], 
  y: [50, 60, 70], 
  xaxis: "x2", 
  yaxis: "y2", 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  xaxis: {domain: [0, 0.7]}, 
  yaxis2: {anchor: "x2"}, 
  xaxis2: {domain: [0.8, 1]}
};

var graph_options = {filename: "custom-size-subplot", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});