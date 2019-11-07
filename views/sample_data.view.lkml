view: sample_data {
  sql_table_name: tmp.sample_data ;;

  dimension: cos {
    type: number
    sql: ${TABLE}.Cos ;;
  }

  dimension_group: date {
    type: time
    timeframes: [
      raw,
      time,
      date,
      week,
      week_of_year,
      month,
      month_num,
      quarter,
      year
    ]
    sql: STR_TO_DATE(${TABLE}.Date, '%m/%d/%Y') ;;
  }

  dimension: exponential {
    type: number
    sql: ${TABLE}.Exponential ;;
  }

  dimension: funky {
    type: number
    sql: ${TABLE}.Funky ;;
  }

  dimension: linear {
    type: number
    sql: ${TABLE}.`Linear` ;;
  }

  dimension: random {
    type: number
    sql: ${TABLE}.Random ;;
  }

  dimension: sin {
    type: number
    sql: ${TABLE}.Sin ;;
  }

  dimension: sin_pos {
    type: number
    sql: ${TABLE}.SinPos ;;
  }

  dimension: state {
    type: string
    sql: ${TABLE}.State ;;
  }

  dimension: status {
    type: string
    sql: ${TABLE}.Status ;;
  }

  measure: count {
    type: count
    drill_fields: []
  }

  measure: sin_wave {
    type: number
    sql: ${sin} ;;
  }

  measure: cos_wave {
    type: number
    sql: ${cos} ;;
  }

  measure: expon_trend {
    type: number
    sql: ${exponential} ;;
  }

  measure: line_trend {
    type: number
    sql: ${linear} ;;
  }

  measure: pos_sin_wave {
    type: number
    sql: ${sin_pos} ;;
  }

  measure: sin_trending {
    type: number
    sql: ${funky} ;;
  }

  measure: num_thru_10 {
    type: number
    sql: ${random} ;;
  }

  measure: rand_true {
    type: number
    sql: round(${random}/100) ;;
  }

  measure: sum_thru_10 {
    type: sum
    sql: ${random} ;;
  }

  measure: avg_thru_10 {
    type: average
    sql: ${random} ;;
  }
}
