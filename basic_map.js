// The svg
const svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

// Map and projection
const path = d3.geoPath();
const projection = d3.geoMercator()
  .scale(150)
  .center([0, 20])
  .translate([width / 2, height / 2]);
  

// returns a single element
let year = document.getElementById("mySlider").value; 


const years = {};
let countries = {};

// Load external data and boot
const promises = [
  d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
  d3.csv("./annual-co2-emissions-per-country.csv",
    (d) => {
      if (!years[d.Year]) {
        // debugger
        years[d.Year] = {};
        years[d.Year][d.Code] = +d["Annual CO₂ emissions (tonnes)"];

      } else if (years[d.Year] && d.Code) {
        years[d.Year][d.Code] = +d["Annual CO₂ emissions (tonnes)"];
      }
    })
]

Promise.all(promises).then((data) => {
  countries = data[0];
  ready();
}).catch((error) => {
  console.log(error);
});
    
    
    // Data and color scale
const colorScale = d3.scaleThreshold()
.domain([500000, 1000000, 5000000, 250000000, 500000000, 1000000000])
.range(d3.schemeBlues[7]);


function ready() {
  // debugger
  
  let mouseOver = function (d) {
    d3.selectAll(".Country")
    .transition()
    .duration(200)
    .style("opacity", 0.5);
    d3.select(this)
    .transition()
    .duration(200)
    .style("opacity", 1)
    .style("stroke", "black");
  };
  
  let mouseLeave = function (d) {
    d3.selectAll(".Country")
    .transition()
    .duration(200)
    .style("opacity", 0.8);
    d3.select(this)
    .transition()
    .duration(200)
    .style("stroke", "transparent");
  };
  
  // Draw the map
  svg.append("g")
  .selectAll("path")
  .data(countries.features)
  .enter()
  .append("path")
  // draw each country
  .attr("d", d3.geoPath()
  .projection(projection)
  )
  // set the color of each country
  .attr("fill", function (d) {
    // debugger
    d.total = years[year][d.id] || 0;
    return colorScale(d.total);
  })
  .style("stroke", "transparent")
  .attr("class", function (d) { return "Country" ;})
  .style("opacity", 0.8)
  .on("mouseover", mouseOver)
  .on("mouseleave", mouseLeave);

}


const changeColor = () => {
  let year = document.getElementById("mySlider").value;
  
  // debugger
  
  let mouseOver = function (d) {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", 0.5);
    d3.select(this)
      .transition()
      .duration(200)
      .style("opacity", 1)
      .style("stroke", "black");
  };

  let mouseLeave = function (d) {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", 0.8);
    d3.select(this)
      .transition()
      .duration(200)
      .style("stroke", "transparent");
  };
  debugger

  // Draw the map
  svg.append("g")
    .selectAll("path")
    .data(countries.features)
    .enter()
    .append("path")
    // draw each country
    .attr("d", d3.geoPath()
      .projection(projection)
    )
    // set the color of each country
    .attr("fill", function (d) {
      // debugger
      d.total = years[year][d.id] || 0;
      return colorScale(d.total);
    })
    .style("stroke", "transparent")
    .attr("class", function (d) { return "Country"; })
    .style("opacity", 0.8)
    .on("mouseover", mouseOver)
    .on("mouseleave", mouseLeave);
};


document.getElementById("mySlider").addEventListener("change", (e) => {
  console.log(e.currentTarget.value);
  changeColor(e.currentTarget.value); 
});


const increment = () => {
  let year = +document.getElementById("mySlider").value;
  if (year < 2017) {
    document.getElementById("mySlider").value = JSON.parse(year + 5);
    changeColor();
  } else {
    debugger
    location.reload();
  }
};




const playThrough = () => {   
  document.getElementById("mySlider").value = 1751;
  increment();
  int = setInterval(increment, 200);
};

document.getElementById("myButton").addEventListener("click", (e) => {
  playThrough(e.currentTarget.value);
});
