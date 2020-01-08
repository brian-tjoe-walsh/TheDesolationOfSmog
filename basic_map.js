// The svg
const svg = d3.select("#my_dataviz"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

// Map and projection
const path = d3.geoPath();
const projection = d3.geoMercator()
  .scale(165)
  .center([0, 20])
  .translate([width / 2, height / 2]);
  

// returns a single element
let year = document.getElementById("mySlider").value; 

let countryName;
let emissions;

let tip = d3.tip().attr('class', 'd3-tip')
  .html((d) => {
    let text = `<strong>Country:</strong> <span style='color:white'> ${countryName}</span><br>`;
    // text += `<strong>Emissions:</strong> <span style='color:white'> ${emissions / 10} Million Tons</span><br>`;
    // debugger
    return text;
  });

svg.call(tip);

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
  .domain([500000, 1000000, 5000000, 250000000, 500000000, 1000000000, 10000000000])
.range(d3.schemeBlues[7]);
// .range(d3.schemeGreys[6]);

// 1000000000
// 9838754028

let map = svg;

let mouseOver = function (d) {
  countryName = d.properties.name;
  // debugger
  emissions = Math.floor(d.total / 100000);
  

  d3.selectAll(".Country")
  .transition()
  .duration(200)
  .style("opacity", 0.5);
  d3.select(this)
  .transition()
  .duration(200)
  .style("opacity", 1);

  tip.show();
};

let mouseLeave = function (d) {
  countryName = null;
  emissions = null;

  d3.selectAll(".Country")
  .transition()
  .duration(200)
  .style("opacity", 0.8);
  d3.select(this)
  .transition()
  .duration(200)
  .style("opacity", 0.8);

  tip.hide(d);
};

function ready() {  
  // Draw the map
  map = svg.append("g")
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
  .style("stroke", "white")
  .attr("class", function (d) { return "Country" ;})
  .style("opacity", 0.8)
  .on("mouseover", mouseOver)
  .on("mouseleave", mouseLeave);

}


const changeColor = () => {
  let year = document.getElementById("mySlider").value;
  
  map._groups[0].forEach((country) => {
    total = years[year][country.__data__.id] || 0;
    country.setAttribute("fill", colorScale(total));
  });
};


document.getElementById("mySlider").addEventListener("change", (e) => {
  console.log(e.currentTarget.value);
  changeColor(e.currentTarget.value); 
  document.getElementById("year").innerHTML = `Year: ${e.currentTarget.value}`;
});




const timeLapse = () => {
  let year = document.getElementById("mySlider").value;
  document.getElementById("year").innerHTML = `Year: ${year}`;
  map._groups[0].forEach((country) => {
    total = years[year][country.__data__.id] || 0;
    country.setAttribute("fill", colorScale(total));
  });
};

let int;

const increment = () => {

  let year = +document.getElementById("mySlider").value;
  if (year < 2017) {
    document.getElementById("mySlider").value = JSON.parse(year + 5);
    timeLapse();
  } else {
    document.getElementById("mySlider").value = JSON.parse(year + 5);
    timeLapse();
    window.clearInterval(int);
    document.getElementById("myButton").value = "Time Lapse";
    int = null;
    // debugger
  }
};



const playThrough = () => {   
  if (int) {
    window.clearInterval(int);
    int = null;
    document.getElementById("myButton").value = "Time Lapse";
  } else { 
    if (document.getElementById("mySlider").value < 2016) {
      increment();
      document.getElementById("myButton").value = "Pause";
      int = setInterval(increment, 200);
    } else {
      document.getElementById("mySlider").value = 1751;
      increment();
      document.getElementById("myButton").value = "Pause";
      int = setInterval(increment, 200);
    }
  }
};

document.getElementById("myButton").addEventListener("click", (e) => {
  playThrough(e.currentTarget.value);
});


const openDirections = () => {
  debugger
  let modal = document.getElementsByClassName("modal")[0];
  if (modal.classList.contains("open")) {
    modal.classList.remove("open");
  } else {
    modal.classList.add("open");
  }
};

document.getElementById("questionMark").addEventListener("click", (e) => {
  debugger
  openDirections();
});

debugger
document.getElementById("modal").addEventListener("click", (e) => {
  debugger
  openDirections();
});