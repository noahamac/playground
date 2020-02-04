view: route_blob {
  sql_table_name: playground.route_blob ;;
  drill_fields: [id]

  dimension: id {
    primary_key: yes
    type: number
    sql: ${TABLE}.id ;;
  }

  dimension: blob {
    type: string
    sql: ${TABLE}.`blob` ;;
  }

  measure: count {
    type: count
    drill_fields: [id]
  }
}
