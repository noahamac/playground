looker.plugins.visualizations.add({
  id: "viz-inspector",
  label: "Viz Inspector",
  options: {
  },
  create: function(element, config) {
    var container = element.appendChild(document.createElement("div"));
    container.className = 'viz-inspector'
  },
  updateAsync: function(data, element, config, queryResponse, details, done) {
    this.clearErrors();
    var wrapper = document.querySelector(".viz-inspector");
    var tree = jsonTree.create(data, wrapper);
    done()
  }
});
