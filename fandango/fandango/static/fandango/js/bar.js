// I modified Teodor's code http://jsfiddle.net/59vLw/
// https://stackoverflow.com/questions/21639305/d3js-take-data-from-an-array-instead-of-a-file?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
// set width and height
var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 560 - margin.left - margin.right,
    height = 480 - margin.top - margin.bottom;

var formatWhole = d3.format("");

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatWhole);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    // text appears when rolled over
    return "<strong>Rating:</strong> <span style='color:white'>" + d.frequency + "</span>";
  })

var svg = d3.select("#bar").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

// The new data variable. I put the data from the JSON file from Fandango
var data = [
  {letter: "A Quiet Place", frequency: 4.5},
  {letter: "Black Panther", frequency: 5},
  {letter: "Ready Player One", frequency: 4.5},
  {letter: "A Wrinkle in Time", frequency: 3.5}
];

// The following code was contained in the callback function.
x.domain(data.map(function(d) { return d.letter; }));
y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")


svg.selectAll(".bar")
    .data(data)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.letter); })
    .attr("width", x.rangeBand())
    .attr("y", function(d) { return y(d.frequency); })
    .attr("height", function(d) { return height - y(d.frequency); })
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)

function type(d) {
  d.frequency = +d.frequency;
  return d;
}
