view: route {
  sql_table_name: playground.route ;;

  dimension: altitude {
    type: string
    sql: ${TABLE}.altitude ;;
  }

  dimension: coord_times {
    type: string
    sql: ${TABLE}.coordTimes ;;
  }

  dimension: coordinates {
    type: string
    sql: ${TABLE}.coordinates ;;
  }

  dimension: courses {
    type: string
    sql: ${TABLE}.courses ;;
  }

  dimension: geometry {
    type: string
    sql: ${TABLE}.geometry ;;
  }

  dimension: h_accs {
    type: string
    sql: ${TABLE}.hAccs ;;
  }

  dimension: latitude {
    type: string
    sql: ${TABLE}.latitude ;;
  }

  dimension: longitude {
    type: string
    sql: ${TABLE}.longitude ;;
  }

  dimension: name {
    type: string
    sql: ${TABLE}.name ;;
  }

  dimension: speeds {
    type: string
    sql: ${TABLE}.speeds ;;
  }

  dimension: time {
    type: string
    sql: ${TABLE}.time ;;
  }

  dimension: v_accs {
    type: string
    sql: ${TABLE}.vAccs ;;
  }

  measure: count {
    type: count
    drill_fields: [name]
  }
}
