view: gcp324 {
  sql_table_name: playground.gcp324 ;;

  measure: bigquery {
    type: number
    sql: ${TABLE}.bigquery ;;
  }

  measure: cloudfunctions_googleapis_com {
    type: number
    sql: ${TABLE}.`cloudfunctions.googleapis.com` ;;
  }

  measure: compute {
    type: number
    sql: ${TABLE}.compute ;;
  }

  dimension_group: logged_at {
    type: time
    timeframes: [date, raw, time]
    sql: PARSE_DATETIME('%Y-%m-%dT%H:%M:%S', ${TABLE}.time) ;;
  }

  measure: count {
    type: count
    drill_fields: []
  }
}
