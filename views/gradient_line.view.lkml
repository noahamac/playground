# If necessary, uncomment the line below to include explore_source.
# include: "playground.model.lkml"

view: gradient_line {
  derived_table: {
    explore_source: sample_data {
      column: sin_trending {}
      column: date_week {}
      column: linear {}
    }
  }
  dimension: sin_trending {
    type: number
  }
  dimension: linear {
    type: number
  }
  measure: head {
    type: number
    sql: ABS(SIN(${linear})*${linear}*10) ;;
  }
  measure: tail {
    type: number
    sql: ABS(SIN(${linear}+1)*${linear}+1*10) ;;
  }
  dimension: date_week {
    type: date_week
  }
}
