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
    label: "Count Orders"
    description: "Simple Count"
    type: count
    drill_fields: []
  }

  measure: sin_wave {
    label: "Customer Sentiment"
    description: "Sin Wave from -1 to 1"
    type: number
    sql: ${sin} ;;
  }

  measure: cos_wave {
    label: "Tweet Sentiment"
    description: "Cos Wave from -1 to 1"
    type: number
    sql: ${cos} ;;
  }

  measure: expon_trend {
    label: "Count Converted Customer"
    description: "Exponential growth over time from .125 to 100T"
    type: number
    sql: ${exponential} ;;
  }

  measure: line_trend {
    label: "New Sales"
    description: "Linear trend over time from 1 to 800"
    type: number
    sql: ${linear} ;;
  }

  measure: pos_sin_wave {
    label: "Website Traffic"
    description: "Absolutely positive sin wave from 0 to 1"
    type: number
    sql: ${sin_pos} ;;
  }

  measure: sin_trending {
    label: "Revenue"
    description: "Trending sin wave from 0 to 100k"
    type: number
    sql: ${funky} ;;
  }

  measure: num_thru_10 {
    label: "Website Visitors"
    description: "Random number 1-10"
    type: number
    sql: ${random} ;;
  }

  measure: rand_true {
    label: "Premium User"
    description: "Random true and false"
    type: number
    sql: round(${random}/100) ;;
  }

  measure: sum_thru_10 {
    label: "Expenses"
    description: "Sum of random measure"
    type: sum
    sql: ${random} ;;
  }

  measure: avg_thru_10 {
    label: "Average Premium Upgrade"
    description: "Average of random measure"
    type: average
    sql: ${random} ;;
  }
}
