// The svg  
  const ele = [500000, 1000000, 5000000, 250000000, 500000000, 1000000000];

  const range = d3.select("#my_scale")
    .attr("width", 300)
    .attr("height", 80);

  const rangeScale = d3.scaleThreshold()
    .domain([500000, 1000000, 5000000, 250000000, 500000000, 1000000000])
    .range(d3.schemeBlues[7]);
    debugger

var rects = range.selectAll("rect")
  .data(ele);

rects.enter()
  .append("text")
    .attr("x", 40)
    .attr("y", 25)
    .text((d, i) => {
      if (i) {
        return ("CO2 Emissions per Million Tons");
      }
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "15")
    .attr("font-weight", "lighter")
    .attr("fill", "gray");

rects.enter()
  .append("rect")
    .attr("x", (d, i) => {
      return (i * 50);
    })
    .attr("y", 30)
    .attr("width", 50)
    .attr("height", 15)
    .attr("fill", (d, i) => {
      return rangeScale(ele[i]);
    }); 

rects.enter()
  .append("line")
    .attr("x1", (d, i) => {
      return (i * 50);
    })
  .attr("x2", (d, i) => {
    return (i * 50);
  })
    .attr("y1", 30)
    .attr("y2", 60)
    .attr("stroke", "gray")
    .attr("height", 15); 
  
rects.enter()
  .append("text")
    .attr("x", (d, i) => {
      return (i * 50) + 3;
    })
    .attr("y", 60)
    .text((d, i) => {
      return (ele[i] / 1000000);
    })
  .attr("font-family", "sans-serif")
  .attr("font-size", "15")
  .attr("font-weight", "lighter")
  .attr("fill", "gray");