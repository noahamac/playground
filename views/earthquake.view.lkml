view: earthquake {
  sql_table_name: playground.earthquake ;;

  dimension: date_time {
    type: string
    sql: ${TABLE}.DateTime ;;
  }

  dimension: depth {
    type: string
    sql: ${TABLE}.Depth ;;
  }

  dimension: distance {
    type: number
    sql: ${TABLE}.Distance ;;
  }

  dimension: event_id {
    type: number
    sql: ${TABLE}.EventID ;;
  }

  dimension: gap {
    type: number
    sql: ${TABLE}.Gap ;;
  }

  dimension: latitude {
    type: string
    sql: ${TABLE}.Latitude ;;
  }

  dimension: longitude {
    type: string
    sql: ${TABLE}.Longitude ;;
  }

  dimension: mag_type {
    type: string
    sql: ${TABLE}.MagType ;;
  }

  dimension: magnitude {
    type: string
    sql: ${TABLE}.Magnitude ;;
  }

  dimension: nb_stations {
    type: number
    sql: ${TABLE}.NbStations ;;
  }

  dimension: rms {
    type: string
    sql: ${TABLE}.RMS ;;
  }

  dimension: source {
    type: string
    sql: ${TABLE}.Source ;;
  }

  measure: count {
    type: count
    drill_fields: []
  }
}
