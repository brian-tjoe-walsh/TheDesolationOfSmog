// // The svg
// const svg = d3.select("svg"),
//   width = +svg.attr("width"),
//   height = +svg.attr("height");

// // Map and projection
// const path = d3.geoPath();
// const projection = d3.geoMercator()
//   .scale(150)
//   .center([0, 20])
//   .translate([width / 2, height / 2]);
  
// let years = {}; 

// d3.select("#mySlider").on("change", function (d) {
//   year = this.value;

//   // const data = {};
// });

// // Load external data and boot
// d3.queue()
//   .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
//   // .defer(d3.csv, 
//   //   "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", 
//   //   (d) => { 
//   //     debugger
//   //     data.set(d.code, +d.pop); })
//   .defer(d3.csv, 
//     "./annual-co2-emissions-per-country.csv", 
//     (d) => { 
//       if (!years[d.Year]) {
//         // debugger
//         years[d.Year] = {};
//         years[d.Year][d.Code] = +d["Annual CO₂ emissions (tonnes)"];

//       } else if (years[d.Year] && d.Code) {
//         years[d.Year][d.Code] = +d["Annual CO₂ emissions (tonnes)"]; 
//       }
//     })
//   .await(ready);

  
// // Data and color scale
// const colorScale = d3.scaleThreshold()
//   .domain([50000000, 100000000, 500000000, 2500000000, 5000000000, 10000000000])
//   .range(d3.schemeBlues[7]);


// function ready(error, topo) {
//   debugger

//   let mouseOver = function (d) {
//     d3.selectAll(".Country")
//       .transition()
//       .duration(200)
//       .style("opacity", .5)
//     d3.select(this)
//       .transition()
//       .duration(200)
//       .style("opacity", 1)
//       .style("stroke", "black")
//   }

//   let mouseLeave = function (d) {
//     d3.selectAll(".Country")
//       .transition()
//       .duration(200)
//       .style("opacity", .8)
//     d3.select(this)
//       .transition()
//       .duration(200)
//       .style("stroke", "transparent")
//   }

//   // Draw the map
//   svg.append("g")
//     .selectAll("path")
//     .data(topo.features)
//     .enter()
//     .append("path")
//     // draw each country
//     .attr("d", d3.geoPath()
//       .projection(projection)
//     )
//     // set the color of each country
//     .attr("fill", function (d) {
//       debugger
//       d.total = data[d.id] || 0;
//       return colorScale(d.total);
//     })
//     .style("stroke", "transparent")
//     .attr("class", function (d) { return "Country" })
//     .style("opacity", .8)
//     .on("mouseover", mouseOver)
//     .on("mouseleave", mouseLeave)
// }

// function updateColor(year) {
//   theCircles
//     .attr("fill", function (d) {
//       debugger
//       d.total = data[d.id] || 0;
//       return colorScale(d.total);
//     })
//     .style("stroke", "transparent")
//     .attr("class", function (d) { return "Country" })
//     .style("opacity", .8)
//     .on("mouseover", mouseOver)
//     .on("mouseleave", mouseLeave)
// }