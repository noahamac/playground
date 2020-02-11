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
      this.container = element.appendChild(document.createElement('svg'));
      this.container.className = 'viz';
  },
  updateAsync: function(data, element, config, queryResponse, details, done){
      // set the dimensions and margins of the graph
      var margin = {top: 20, right: 20, bottom: 20, left: 20},
          width = element.clientWidth,
          height = element.clientHeight;

      // var svg = d3.select("#vis").append("svg");
      // Data processing here to get data in right shape

      this.trigger('registerOptions', baseOptions);

      var dims = queryResponse['fields']['dimension_like']
      var meas = queryResponse['fields']['measure_like']
      var dim1 = dims[0]['name'];
      var mea1 = meas[0]['name'];
      var mea2 = meas[1]['name'];
      var final = []
      data.map((d, i) => {
        final.push({v: data[i][dim1].value, x: -1*data[i][mea1].value, y: data[i][mea2].value})
      });
      console.log(final)

      var vizOptions = {
          w: width,
          h: height,
          data: final
      };

      MG.data_graphic({
          title: "Simple Line of Best Fit",
          description: "For any scatterplot, set least_squares to true to add.",
          data: vizOptions.data,
          least_squares: false,
          chart_type: 'point',
          interpolate: false,
          width: vizOptions.w,
          height: vizOptions.h,
          right: 10,
          target: '.viz',
          x_accessor: 'x',
          y_accessor: 'y'
      });
      //Call function to draw the visualization
      // svg.append("g").call(MyViz("#vis", element, data, vizOptions));

      done()
    }
  };

looker.plugins.visualizations.add(visObject);
