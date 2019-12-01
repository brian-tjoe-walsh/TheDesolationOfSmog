// 	/*
// 	*    main.js
// 	*    Mastering Data Visualization with D3.js
// 	*    2.4 - Adding SVGs with D3
// 	*/

// 	// d3.csv("./annual-share-of-co2-emissions.csv")
// 	// 	.then( (data) => {
// 	// 		console.log(data);
// 	// 	});

// 	const svg = d3.select("#chart-area")
// 		.append("svg")
// 			.attr("height", 500)
// 			.attr("width", 1000);

// d3.csv("./annual-co2-emissions-per-country.csv")
// 	.then((data) => {

// 		let years = {};
// 		let year;
		
// 		for(let i = 1751; i < 2017; i ++) {
// 			year = [];
// 			data.forEach((d) => {
// 				debugger
// 				if (+d.Year === i && d.Entity !== "World") {
// 					d.Year = +d.Year;
// 					d["Annual CO₂ emissions (tonnes)"] = +d["Annual CO₂ emissions (tonnes)"];
// 					year.push(d);
// 				}
// 			});

// 			years[i] = year;
// 		}

// 		year = 2015;	

// 		const val_extent = d3.extent(years[year], (d) => {
// 			// console.log(d["Share of global CO₂ emissions (%)"]);
// 			return d["Annual CO₂ emissions (tonnes)"];
// 		});

// 		console.log(val_extent);

// 		const y = d3.scaleLinear()
// 			.domain([val_extent[0], val_extent[1]])
// 			.range([0, 500]);

// 		const x = d3.scaleLinear()
// 			.domain([0, years[year].length])
// 			.range([0, 1000]);

// 		console.log(y(val_extent[1]));
// 		// console.log(val_extent);

// 		// years[2016].forEach((d) => {
// 		// 	// console.log(d);
// 		// 	if (d["Annual CO₂ emissions (tonnes)"] === val_extent) {
// 		// 		console.log(d);
// 		// 	}
// 		// });

// 		// const svg = d3.select("#chart-area")
// 		// 	.append("svg")
// 		// 	.attr("width", 1000)
// 		// 	.attr("height", 1000);

// 		// console.log(years[1751]);

// 		const rects = svg.selectAll("rect")
// 			.data(years[year]);

// 		rects.enter()
// 			.append("rect")
// 			.attr("y", 0)
// 			.attr("x", (d, i) => {
// 				return (i*4) + (x(1));
// 			})
// 			.attr("width", (d, i) => {
// 				return (4);
// 			})
// 			.attr("height", (d) => {
// 				if (d["Annual CO₂ emissions (tonnes)"] > 50) {
// 					console.log(d);
// 				}
// 				return y(d["Annual CO₂ emissions (tonnes)"]);
// 			})
// 			.attr("fill", (d) => {
// 				return "grey";
// 			});

// 		// console.log(years);
// 		// const svg = d3.select("#chart-area")
// 		// 	.append("svg")
// 		// 	.attr("width", 4000)
// 		// 	.attr("height", 4000);


// 		// const circles = svg.selectAll("circle")
// 		// 	.data(data);

// 		// circles.enter()
// 		// 	.append("circle")
// 		// 	.attr("cx", (d, i) => {
// 		// 		// d = element in the arr && i = index
// 		// 		return (i * 50) + 25;
// 		// 	})
// 		// 	.attr("cy", 25)
// 		// 	.attr("r", (d, i) => {
// 		// 		console.log(d.Sales);
// 		// 		return d.Sales / 200000;
// 		// 	})
// 		// 	.attr("fill", "red");

// 	}).catch((err) => {
// 		console.log(err);
// 	});

// // d3.json("./data.json")
// // 	.then( (data) => {
		
// // 		data.forEach( (d) => {
// // 			d.Year = +d.Year;
// // 			d.Sales = +d.Sales;
// // 		});

// // 		console.log(data);
		
// // 		const svg = d3.select("#chart-area")
// // 		.append("svg")
// // 		.attr("width", 4000)
// // 		.attr("height", 4000);
		
		
// // 		const circles = svg.selectAll("circle")
// // 		.data(data);
		
// // 		circles.enter()
// // 		.append("circle")
// // 		.attr("cx", (d, i) => {
// // 			// d = element in the arr && i = index
// // 			return(i * 50) + 25;
// // 		})
// // 		.attr("cy", 25)
// // 		.attr("r", (d, i) => {
// // 			console.log(d.Sales);
// // 			return d.Sales / 200000;
// // 		})
// // 		.attr("fill", "red");
		
// // 	}).catch((err) => {
// // 		console.log(err);
// // 	});
			
// 	// const circle = svg1.append("circle")
// 	// 	.attr("cx", 150)
// 	// 	.attr("cy", 150)
// 	// 	.attr("r", 100)
// 	// 	.attr("fill", "red");

// 	// const square = svg1.append("rect")
// 	// 	.attr("x", 300)
// 	// 	.attr("y", 300)
// 	// 	.attr("width", 50)
// 	// 	.attr("height", 50)
// 	// 	.attr("fill", "pink");

// 	// const svg2 = d3.select("#chart-area2")
// 	// 	.append("svg")
// 	// 		.attr("width", 500)
// 	// 		.attr("height", 400);

// 	// const line = svg2.append("line")
// 	// 	.attr("x1", 0)
// 	// 	.attr("y1", 0)
// 	// 	.attr("x2", 100)
// 	// 	.attr("y2", 100)
// 	// 	.attr("stroke", "blue")
// 	// 	.attr("stroke-width", 5);

// 	// // const text = svg.append(<text x=“260” y =“250” font - size=“20px” text - anchor=“middle” 	fill =“orange”> Hello 	World</text >)