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
create: function(element,config) {
// Create a container element to let us center the text.
element.innerHTML = `<style>
.ag-row-group {
  font-weight: bold;
}
</style>`
element.setAttribute("class","parentGrid");
element.setAttribute('style','width: 100%;');
element.setAttribute('style','height: 100%;');

// Create an element to contain the text.
this._textElement = element.appendChild(document.createElement("div")).setAttribute("class","myGrid");
$('.myGrid').addClass('ag-theme-balham');
$('.myGrid').width('100%');
$('.myGrid').height('100%');

$('head').append('<link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-grid.css">');
$('head').append('<link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-balham.css">');
$('head').append('<link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-dark.css">');
$('head').append('<link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-blue.css">');
$('head').append('<link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-material.css">');
$('head').append('<link rel="stylesheet" href="https://unpkg.com/ag-grid-community/dist/styles/ag-theme-bootstrap.css">');
},
  updateAsync: function(data, element, config, queryResponse, details, done){
      // set the dimensions and margins of the graph
      var margin = {top: 20, right: 20, bottom: 20, left: 20},
          width = element.clientWidth,
          height = element.clientHeight;

      d3.select('#vis > *').remove();
      element.innerHTML = `
        <style>
          .mg-active-datapoint {
    fill: black;
    font-size: 0.9rem;
    font-weight: 400;
    opacity: 0.8;
}

.mg-area-color {
    fill: #000;
}

.mg-area1-color {
    fill: #0000ff;
}

.mg-area2-color {
    fill: #05b378;
}

.mg-area3-color {
    fill: #db4437;
}

.mg-area4-color {
    fill: #f8b128;
}

.mg-area5-color {
    fill: #5c5c5c;
}

.mg-area6-color {
    fill: steelblue;
}

.mg-area7-color {
    fill: #f673bf;
}

.mg-area8-color {
    fill: #0b73b0;
}

.mg-area9-color {
    fill: #006400;
}

.mg-area10-color {
    fill: #92514f;
}

text.mg-barplot-group-label {
    font-weight:900;
}

.mg-barplot rect.mg-bar {
    shape-rendering: auto;
}

.mg-barplot rect.mg-bar.default-bar {
    fill: #b6b6fc;
}

.mg-barplot rect.mg-bar.default-active {
    fill: #9e9efc;
}

.mg-barplot .mg-bar-prediction {
    fill: #5b5b5b;
}

.mg-barplot .mg-bar-baseline {
    stroke: #5b5b5b;
    stroke-width: 2;
}

.mg-bar-target-element {
    font-size:11px;
    padding-left:5px;
    padding-right:5px;
    font-weight:300;
}

.mg-baselines line {
    opacity: 1;
    shape-rendering: auto;
    stroke: #b3b2b2;
    stroke-width: 1px;
}

.mg-baselines text {
    fill: black;
    font-size: 0.9rem;
    opacity: 0.6;
    stroke: none;
}

.mg-baselines-small text {
    font-size: 0.6rem;
}

.mg-category-guides line {
    stroke: #b3b2b2;
}

.mg-header {
    cursor: default;
    font-size: 1.2rem;
}

.mg-header .mg-chart-description {
    fill: #ccc;
    font-family: FontAwesome;
    font-size: 1.2rem;
}

.mg-header .mg-warning {
    fill: #ccc;
    font-family: FontAwesome;
    font-size: 1.2rem;
}

.mg-points circle {
    opacity: 0.65;
}

.mg-popover {
    font-size: 0.95rem;
}

.mg-popover-content {
    cursor: auto;
    line-height: 17px;
}

.mg-data-table {
    margin-top: 30px;
}

.mg-data-table thead tr th {
    border-bottom: 1px solid darkgray;
    cursor: default;
    font-size: 1.1rem;
    font-weight: normal;
    padding: 5px 5px 8px 5px;
    text-align: right;
}

.mg-data-table thead tr th .fa {
    color: #ccc;
    padding-left: 4px;
}

.mg-data-table thead tr th .popover {
    font-size: 1rem;
    font-weight: normal;
}

.mg-data-table .secondary-title {
    color: darkgray;
}

.mg-data-table tbody tr td {
    margin: 2px;
    padding: 5px;
    vertical-align: top;
}

.mg-data-table  tbody tr td.table-text {
    opacity: 0.8;
    padding-left: 30px;
}

.mg-y-axis line.mg-extended-yax-ticks {
    opacity: 0.4;
}

.mg-x-axis line.mg-extended-xax-ticks {
    opacity: 0.4;
}

.mg-histogram .axis path,
.mg-histogram .axis line {
    fill: none;
    opacity: 0.7;
    shape-rendering: auto;
    stroke: #ccc;
}

tspan.hist-symbol {
    fill: #9e9efc;
}

.mg-histogram .mg-bar rect {
    fill: #b6b6fc;
    shape-rendering: auto;
}

.mg-histogram .mg-bar rect.active {
    fill: #9e9efc;
}

.mg-least-squares-line {
    stroke: red;
    stroke-width: 1px;
}

.mg-lowess-line {
    fill: none;
    stroke: red;
}

.mg-rollover-rect * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.mg-line-color {
    stroke: #000;
}

.mg-hover-line-color {
    fill: #000;
}

.mg-line1-color {
    stroke: #4040e8;
}

.mg-hover-line1-color {
    fill: #4040e8;
}

.mg-line2-color {
    stroke: #05b378;
}

.mg-hover-line2-color {
    fill: #05b378;
}

.mg-line3-color {
    stroke: #db4437;
}

.mg-hover-line3-color {
    fill: #db4437;
}

.mg-line4-color {
    stroke: #f8b128;
}

.mg-hover-line4-color {
    fill: #f8b128;
}

.mg-line5-color {
    stroke: #5c5c5c;
}

.mg-hover-line5-color {
    fill: #5c5c5c;
}

.mg-line6-color {
    stroke: steelblue;
}

.mg-hover-line6-color {
    fill: steelblue;
}

.mg-line7-color {
    stroke: #f673bf;
}

.mg-hover-line7-color {
    fill: #f673bf;
}

.mg-line8-color {
    stroke: #0b73b0;
}

.mg-hover-line8-color {
    fill: #0b73b0;
}

.mg-line9-color {
    stroke: #006400;
}

.mg-hover-line9-color {
    fill: #006400;
}

.mg-line10-color {
    stroke: #92514f;
}

.mg-hover-line10-color {
    fill: #92514f ;
}

.mg-line-legend text {
    font-size: 0.9rem;
    font-weight: 300;
    stroke: none;
}

.mg-line-legend-color {
    color: #000;
    fill: #000;
}

.mg-line1-legend-color {
    color: #4040e8;
    fill: #4040e8;
}

.mg-line2-legend-color {
    color: #05b378;
    fill: #05b378;
}

.mg-line3-legend-color {
    color: #db4437;
    fill: #db4437;
}

.mg-line4-legend-color {
    color: #f8b128;
    fill: #f8b128;
}

.mg-line5-legend-color {
    color: #5c5c5c;
    fill: #5c5c5c;
}

.mg-line6-legend-color {
    color: steelblue;
    fill: steelblue;
}

.mg-line7-legend-color {
    color: #f673bf;
    fill: #f673bf;
}

.mg-line8-legend-color {
    color: #0b73b0;
    fill: #0b73b0;
}

.mg-line9-legend-color {
    color: #006400;
    fill: #006400;
}

.mg-line10-legend-color {
    color: #92514f;
    fill: #92514f;
}

.mg-main-area-solid svg .mg-main-area {
    fill: #ccccff;
    opacity: 1;
}

.mg-markers line {
    opacity: 1;
    shape-rendering: auto;
    stroke: #b3b2b2;
    stroke-width: 1px;
}

.mg-markers text {
    fill: black;
    font-size: 0.8rem;
    opacity: 0.6;
}

.mg-missing-text {
    opacity: 0.9;
}

.mg-missing-background {
    stroke: blue;
    fill: none;
    stroke-dasharray: 10,5;
    stroke-opacity: 0.05;
    stroke-width: 2;
}

.mg-missing .mg-main-line {
    opacity: 0.1;
}

.mg-missing .mg-main-area {
    opacity: 0.03;
}

path.mg-main-area {
    opacity: 0.2;
    stroke: none;
}

path.mg-confidence-band {
    fill: #ccc;
    opacity: 0.4;
    stroke: none;
}

path.mg-main-line {
    fill: none;
    opacity: 0.8;
    stroke-width: 1.1px;
}

.mg-points circle {
    fill-opacity: 0.4;
    stroke-opacity: 1;
}

circle.mg-points-mono {
    fill: #0000ff;
    stroke: #0000ff;
}

tspan.mg-points-mono {
    fill: #0000ff;
    stroke: #0000ff;
}

/* a selected point in a scatterplot */
.mg-points circle.selected {
    fill-opacity: 1;
}

.mg-highlight circle {
    fill-opacity: 0;
    stroke-width: 4px;
    stroke-opacity: 0.3;
}

.mg-voronoi path {
    fill: none;
    pointer-events: all;
    stroke: none;
    stroke-opacity: 0.1;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.mg-x-rug-mono,
.mg-y-rug-mono {
    stroke: black;
}

.mg-x-axis line,
.mg-y-axis line {
    opacity: 1;
    shape-rendering: auto;
    stroke: #b3b2b2;
    stroke-width: 1px;
}

.mg-x-axis text,
.mg-y-axis text,
.mg-histogram .axis text {
    fill: black;
    font-size: 0.9rem;
    opacity: 0.6;
}

.mg-x-axis .label,
.mg-y-axis .label,
.mg-axis .label {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 400;
}

.mg-x-axis-small text,
.mg-y-axis-small text,
.mg-active-datapoint-small {
    font-size: 0.6rem;
}

.mg-x-axis-small .label,
.mg-y-axis-small .label {
    font-size: 0.65rem;
}

.mg-european-hours {
}

.mg-year-marker text {
    fill: black;
    font-size: 0.7rem;
    opacity: 0.6;
}

.mg-year-marker line {
    opacity: 1;
    shape-rendering: auto;
    stroke: #b3b2b2;
    stroke-width: 1px;
}

.mg-year-marker-small text {
    font-size: 0.6rem;
}

.mg-brush-container {
    cursor: crosshair;
}

.mg-brush-container .mg-brushing {
    cursor: ew-resize;
}

.mg-brushed, .mg-brushed * {
    cursor: zoom-out;
}

.mg-brush rect.mg-extent {
    fill: rgba(0, 0, 0, 0.3);
}

.mg-brushing-in-progress {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
        </style>
      `;
      // Data processing here to get data in right shape

      this.trigger('registerOptions', baseOptions);
      var dims = queryResponse['fields']['dimension_like']
      var meas = queryResponse['fields']['measure_like']
      var dim1 = dims[0]['name'];
      var mea1 = meas[0]['name'];
      var mea2 = meas[1]['name'];
      var final = []
      data.map((d, i) => {
        final.push({v: data[i][dim1].value, x: data[i][mea1].value, y: data[i][mea2].value === null ? 0 : data[i][mea2].value})
      });

      console.log(final)
      var vizOptions = {
          w: width,
          h: height,
          name: config.chili_name,
          heat: config.chili_heat
      };

      //Call function to draw the visualization
     // svg.append("g").call(MyViz("#vis", element, data, vizOptions));

      MG.data_graphic({
        title: "",
        description: "",
        data: final,
        least_squares: false,
        // chart_type: 'line',
        width: element.clientWidth,
        height: element.clientHeight,
        top: 0,
        bottom: 0,
        target: '#vis',
        color_accessor: 'v',
        color_type:'category',
        x_accessor: 'x',
        y_accessor: 'y'
      });

      done()
    }
  };

looker.plugins.visualizations.add(visObject);
