connection: "datapoint"

# include all the views
include: "/views/**/*.view"

datagroup: playground_default_datagroup {
  # sql_triggerdwdwd: SELECT MAX(id) FROM etl_log;;
  max_cache_age: "1 hour"
}

persist_with: playground_default_datagroup

explore: sample_data {
  join: gradient_line {
    sql_on: ${gradient_line.date_week} = ${sample_data.date_week} ;;
    relationship: one_to_one
  }
}

explore: route {
  from: route
}
explore: route_blob {
  from: route_blob
}

explore: earthquake {}

explore: workouts {}

explore: gcp324 {}
