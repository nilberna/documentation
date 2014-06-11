var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var trace1 = {
  x: [1, 2, 3], 
  y: [40, 50, 60], 
  name: "yaxis data", 
  type: "scatter"
};
var trace2 = {
  x: [2, 3, 4], 
  y: [4, 5, 6], 
  name: "yaxis2 data", 
  yaxis: "y2", 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  title: "Double Y Axis Example", 
  yaxis: {title: "yaxis title"}, 
  yaxis2: {
    title: "yaxis2 title", 
    titlefont: {color: "rgb(148, 103, 189)"}, 
    tickfont: {color: "rgb(148, 103, 189)"}, 
    side: "right", 
    overlaying: "y"
  }
};

var graph_options = {filename: "multiple-axes-double", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});