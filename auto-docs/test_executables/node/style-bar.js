var plotly = require('plotly')('theengineear', 'o9zlr0hy6z')

var trace1 = {
  x: ["giraffes", "orangutans", "monkeys"], 
  y: [20, 14, 23], 
  name: "SF Zoo", 
  marker: {
    line: {color: "grey"}, 
    color: "orange"
  }, 
  type: "bar"
};
var trace2 = {
  x: ["giraffes", "orangutans", "monkeys"], 
  y: [12, 18, 29], 
  name: "LA Zoo", 
  marker: {
    line: {
      color: "grey", 
      width: 3
    }, 
    color: "blue"
  }, 
  type: "bar"
};
var data = [trace1, trace2];
var layout = {
  title: "Animal Population", 
  xaxis: {type: "category"}, 
  yaxis: {title: "# of animals (thousands)"}, 
  categories: ["giraffes", "orangutans", "monkeys"], 
  barmode: "group", 
  bargap: 0.25, 
  bargroupgap: 0.3, 
  orientation: "v"
};

var graph_options = {filename: "style-bar", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});