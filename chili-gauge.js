//This template is a good starting point for building a Viz for Looker

function mapBetween(currentNum, minAllowed, maxAllowed, min, max) {
  	return (maxAllowed - minAllowed) * (currentNum - min) / (max - min) + minAllowed;
}

function MyViz(id, element, data, options) {
	var cfg = {
		w: 600,												//Width of the circle
		h: 600,												//Height of the circle
		margin: {top: 20, right: 20, bottom: 20, left: 20}, //The margins of the SVG
		style: "radial",
		angle: 40,	// Angle of Gauge
		cutout: .25,	// Size of Gauge Cutout
		color: '#DB4437',	// Color of Gauge fill
		arm: 10,					// Arm extension
		arm_weight: 10,		// Arm weight
		gauge_background: '#CECECE',	// Gauge background color
		spinner_background: '#282828',	// Spinner background color
		spinner_weight: 6,	// Spinner Weight
		range: [0,550000],
		value: 130000,
		target: 75,
		target_background: '#282828',
		target_width: 6
	};
  
  levels = cfg.value / cfg.range[1] * 9;
  console.log(levels);

	colorArray = ["#0275d8","#5cb85c","#5bc0de","#f0ad4e","#d9534f"]

	let color = colorArray[Math.floor(Math.random()*colorArray.length)];
	let value = Math.ceil(Math.random()*cfg.range[1]);
	let target = Math.floor(Math.random()*cfg.range[1]);

  
  	//let radius = 0.4*Math.min(element.clientWidth, element.clientHeight);
  	let radius = .4*element.clientWidth;
  	let cutoutCalc = radius*cfg.cutout;
	
	//Put all of the options into a variable called cfg
	if('undefined' !== typeof options){
		for(var i in options){
			if('undefined' !== typeof options[i]){ cfg[i] = options[i]; }
	  	}
	}
  
  	d3.select(id).selectAll("svg").remove();
  	var div = d3.select(id)
	    .style("background-color", "#FFF")
	  	.style("overflow-x", "hidden")
	  	.style("overflow-y", "hidden")
	  	.attr("align","center");
  
	var svg = d3.select(id).append("svg")
		.attr("class", "viz_svg")
  	.attr("width", element.clientWidth)
  	.attr("height", element.clientHeight)
  	.attr("preserveAspectRatio", "xMidYMid meet");
  	//.attr("viewBox", `0 0 ${element.clientWidth} ${element.clientHeight}`);
  
	var g = svg.append("g");
  
  g.append("rect")
  	.attr("rx", 20)
  	.attr("ry", 20)
  	.attr("width", element.clientWidth * .95)
  	.attr("height", element.clientHeight * .95)
  	.attr("x", element.clientWidth * .025)
  	.attr("y", element.clientHeight * .025)
  	.attr("stroke-width", "5px")
  	.attr("stroke", "#ff073a")
  	.attr("fill", "black")
  	.style("filter", "url(#glow)");
  
  var chili = g.append("polygon")
  	.attr("points", "137 50,140 46,145 45,150 46,154 50,155 54,150 57,148 51,145 50,142 50,140 52,140 57,142 60,148 65,149 70,144 84,144 88,147 97,151 108,153 121,153 132,147 140,144 140,138 126,131 115,122 106,118 97,116 80,117 70,119 63,124 59,130 56,134 57")
  	.attr("fill", "none")
  	.attr("stroke", "#ff073a")
  	.attr("stroke-width", "2px")
  	.style("filter", "url(#glow)");
  
  console.log(chili.node().getBBox());
  var yadj = (((element.clientHeight - chili.node().getBBox().height) / 2) - chili.node().getBBox().y)
  var scale = 3;
  chili.attr("transform", `scale(${scale}),translate(${-93} ${-10})`);
  
  g.append("line")
  	.attr("id", "level9")
  	.attr("x1", 75)
  	.attr("y1", 160)
  	.attr("x2", 160)
  	.attr("y2", 165)
  	.attr("stroke", "#ff073a")
  	.attr("stroke-width", "8px")
  	.attr("fill", "none")
  	.style("filter", "url(#glow)");
  g.append("line")
  	.attr("id", "level8")
  	.attr("x1", 75)
  	.attr("y1", 185)
  	.attr("x2", 165)
  	.attr("y2", 190)
  	.attr("stroke", "#ff073a")
  	.attr("stroke-width", "8px")
  	.attr("fill", "none")
  	.style("filter", "url(#glow)");
  g.append("line")
  	.attr("id", "level7")
  	.attr("x1", 70)
  	.attr("y1", 210)
  	.attr("x2", 158)
  	.attr("y2", 215)
  	.attr("stroke", "#ff073a")
  	.attr("stroke-width", "8px")
  	.attr("fill", "none")
  	.style("filter", "url(#glow)");
  g.append("line")
  	.attr("id", "level6")
  	.attr("x1", 75)
  	.attr("y1", 235)
  	.attr("x2", 155)
  	.attr("y2", 240)
  	.attr("stroke", "#faed27")
  	.attr("stroke-width", "8px")
  	.attr("fill", "none")
  	.style("filter", "url(#glow)");
  g.append("line")
  	.attr("id", "level5")
  	.attr("x1", 75)
  	.attr("y1", 260)
  	.attr("x2", 165)
  	.attr("y2", 265)
  	.attr("stroke", "#faed27")
  	.attr("stroke-width", "8px")
  	.attr("fill", "none")
  	.style("filter", "url(#glow)");
  g.append("line")
  	.attr("id", "level4")
  	.attr("x1", 85)
  	.attr("y1", 285)
  	.attr("x2", 170)
  	.attr("y2", 290)
  	.attr("stroke", "#faed27")
  	.attr("stroke-width", "8px")
  	.attr("fill", "none")
  	.style("filter", "url(#glow)");
  g.append("line")
  	.attr("id", "level3")
  	.attr("x1", 110)
  	.attr("y1", 310)
  	.attr("x2", 180)
  	.attr("y2", 315)
  	.attr("stroke", "#51FF02")
  	.attr("stroke-width", "8px")
  	.attr("fill", "none")
  	.style("filter", "url(#glow)");
  g.append("line")
  	.attr("id", "level2")
  	.attr("x1", 125)
  	.attr("y1", 335)
  	.attr("x2", 180)
  	.attr("y2", 340)
  	.attr("stroke", "#51FF02")
  	.attr("stroke-width", "8px")
  	.attr("fill", "none")
  	.style("filter", "url(#glow)");
  g.append("line")
  	.attr("id", "level1")
  	.attr("x1", 140)
  	.attr("y1", 360)
  	.attr("x2", 180)
  	.attr("y2", 365)
  	.attr("stroke", "#51FF02")
  	.attr("stroke-width", "8px")
  	.attr("fill", "none")
  	.style("filter", "url(#glow)");
  g.append("text")
    .attr("id", "label")
    .attr("x", 140)
    .attr("y", 360)
    .text(cfg.name)
    .attr("stroke", "#ff073a")
    .attr("stroke-width", "8px")
    .attr("fill", "none")
    .style("filter", "url(#glow)");
  
   var filter = g.append('defs').append('filter').attr('id','glow'),
		feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '5').attr('result','coloredBlur'),
		feMerge = filter.append('feMerge'),
		feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
		feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');
  

} //MyViz

const baseOptions = {
		chili_name: {
      	type: "string",
      	label: "Chili Label",
      	section: "Plot"
    },
    chili_heat: {
      label: 'Chili Heat',
      min: 0,
      max: 10,
      default: 3,
      section: 'Plot',
      type: 'number',
      display: 'range'
    },
}

const visObject = {
	create: function(element, config){
			element.innerHTML = "";
	},
	updateAsync: function(data, element, config, queryResponse, details, doneRendering){
    	// set the dimensions and margins of the graph
    	var margin = {top: 20, right: 20, bottom: 20, left: 20},
        	width = element.clientWidth,
        	height = element.clientHeight;

	    var svg = d3.select("#vis").append("svg");
	    // Data processing here to get data in right shape

	  	this.trigger('registerOptions', baseOptions);

			var vizOptions = {
		  		w: width,
		  		h: height,
		  		name: config.chili_name,
          heat: config.chili_heat
			};

			//Call function to draw the visualization
	    svg.append("g").call(MyViz("#vis", element, data, vizOptions));

			done()
		}
	};

looker.plugins.visualizations.add(visObject);
