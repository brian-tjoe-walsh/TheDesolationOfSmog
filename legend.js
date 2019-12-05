// The svg  
const ele = [0, 500000, 1000000, 5000000, 250000000, 500000000, 1000000000];
const reversed = [1000000000, 1000000000, 500000000, 250000000, 5000000, 1000000, 500000];


  const range = d3.select("#my_scale")
    .attr("width", 120)
    .attr("height", 350);

  const rangeScale = d3.scaleThreshold()
    .domain([500000, 1000000, 5000000, 250000000, 500000000, 1000000000, 10000000000])
    .range(d3.schemeBlues[8]);
    // debugger

var rects = range.selectAll("rect")
  .data(ele);

// rects.enter()
//   .append("text")
//     .attr("x", 20)
//     .attr("y", 25)
//     .text((d, i) => {
//       if (i) {
//         return ("CO2 Emissions Per Year (Million Tons)");
//       }
//     })
//     .attr("font-family", "sans-serif")
//     .attr("font-size", "15")
//     .attr("font-weight", "lighter")
//     .attr("fill", "gray");

rects.enter()
  .append("rect")
    .attr("y", (d, i) => {
      return 300 - (i * 50);
    })
    .attr("x", 30)
    .attr("width", 15)
    .attr("height", 50)
    .attr("fill", (d, i) => {
      return rangeScale(ele[i]);
    }); 

rects.enter()
  .append("line")
    .attr("y1", (d, i) => {
      return (i * 50);
    })
  .attr("y2", (d, i) => {
    return (i * 50);
  })
    .attr("x1", 30)
    .attr("x2", 60)
    .attr("stroke", "gray")
    .attr("height", 15); 
  
rects.enter()
  .append("text")
    .attr("y", (d, i) => {
      return (i * 50) + 20;
    })
    .attr("x", 55)
    .text((d, i) => {
      if (i === 0) {
        return `${(reversed[i] / 1000000)}+`;
      } else if (i === 6) {
        return `${(reversed[i] / 1000000)} `;
      } else {
        return `${(reversed[i] / 1000000)} `;
      }
    })
  .attr("font-family", "sans-serif")
  .attr("font-size", "15")
  .attr("font-weight", "lighter")
  .attr("fill", "gray");