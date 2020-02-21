project_name: "playground"

# # Use local_dependency: To enable referencing of another project
# # on this instance with include: statements
#
# local_dependency: {
#   project: "name_of_other_project"
# }

visualization: {
  id: "kepler-test"
  file: "kepler.js"
  label: "Kepler GIS"
  dependencies: []
}

visualization: {
  id: "metricsgraphics"
  file: "metrics.js"
  label: "Metrics"
  dependencies: ["https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.min.js", "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/metrics-graphics/2.15.6/metricsgraphics.js"]
}

visualization: {
  id: "react-starter"
  file: "react_starter.js"
  label: "React Starter"
  dependencies: []
}

visualization: {
  id: "calendarheatmap"
  file: "calendar_chart.js"
  label: "CAL HM MF"
  dependencies: []
}

visualization: {
  id: "chiligauge2"
  file: "chili-gauge.js"
  label: "CHILIS"
  dependencies: ["https://code.jquery.com/jquery-2.2.4.min.js","https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js","https://d3js.org/d3.v5.min.js"]
}

visualization: {
  id: "bugfixmv"
  file: "grouped_card.js"
  label: "Multi Value bugfix"
  dependencies: []
}

visualization: {
  id: "bugfiefrxmv"
  file: "gauge.js"
  label: "Gage Chart bugfix"
  dependencies: []
}
