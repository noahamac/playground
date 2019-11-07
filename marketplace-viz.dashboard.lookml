- dashboard: marketplace_visualizations
  title: Marketplace Visualizations
  layout: newspaper
  elements:
  - title: Gauge
    name: Gauge
    model: playground
    explore: sample_data
    type: gauge-dev
    fields: [sample_data.date_month, sample_data.sin_trending]
    fill_fields: [sample_data.date_month]
    sorts: [sample_data.date_month]
    limit: 500
    color_by: range
    segments: 3
    thickness: '50'
    font_size_title: '24'
    font_size_target: '10'
    font_size_arc: '16'
    font_size_main: '32'
    target_display: true
    target_color: ["#6565ee"]
    target_label: 'Target: '
    target_value: 20000000
    Sample Data Sin Trending_color_range: ["#b6aded", "#6b39ed"]
    Sample Data Sin Trending_color_segments: ["#6565ee", "#33a7ed"]
    range_Sample Data Sin Trending: ['0', '4000']
    show_title_Sample Data Sin Trending: true
    title_override_Sample Data Sin Trending: Sample Data Sin Trending
    value_format_Sample Data Sin Trending: "#,##0.00"
    series_types: {}
    listen: {}
    row: 5
    col: 16
    width: 8
    height: 7
  - title: Gauge Multiple
    name: Gauge Multiple
    model: playground
    explore: sample_data
    type: multigauge-dev
    fields: [sample_data.avg_thru_10, sample_data.date_date]
    fill_fields: [sample_data.date_date]
    sorts: [sample_data.date_date desc]
    limit: 3
    query_timezone: America/Los_Angeles
    columns: '3'
    segments: '5'
    thickness: '50'
    font_size_title: '16'
    font_size_target: '10'
    font_size_arc: '16'
    font_size_main: '12'
    target_display: true
    target_color: ["#6565ee"]
    target_label: 'Target: '
    display_title: true
    value_format: ''
    2019-12-31_color_range: ["#6565ee", "#33a7ed"]
    range_2019-12-31: ['0', '100']
    2019-12-31_target_value: 0
    title_override_2019-12-31: '2019-12-31'
    2019-12-30_color_range: ["#6565ee", "#33a7ed"]
    range_2019-12-30: ['0', '100']
    2019-12-30_target_value: 0
    title_override_2019-12-30: '2019-12-30'
    2019-12-29_color_range: ["#6565ee", "#33a7ed"]
    range_2019-12-29: ['0', '100']
    2019-12-29_target_value: 0
    title_override_2019-12-29: '2019-12-29'
    target_value: 0
    2019-10_color_range: ["#6565ee", "#33a7ed"]
    title_override_2019-10: 2019-10
    2019-07_color_range: ["#6565ee", "#33a7ed"]
    title_override_2019-07: 2019-07
    2019-04_color_range: ["#6565ee", "#33a7ed"]
    title_override_2019-04: 2019-04
    series_types: {}
    listen: {}
    row: 17
    col: 6
    width: 18
    height: 6
  - title: Multiple Value
    name: Multiple Value
    model: playground
    explore: sample_data
    type: grouped_card_dev
    fields: [sample_data.date_month_num, sample_data.avg_thru_10, sample_data.cos_wave,
      sample_data.num_thru_10, sample_data.line_trend, sample_data.sin_trending]
    fill_fields: [sample_data.date_month_num]
    sorts: [sample_data.avg_thru_10 desc]
    limit: 500
    query_timezone: America/Los_Angeles
    font_size_main: '25'
    style_sample_data.avg_thru_10: ["#592EC2"]
    show_title_sample_data.avg_thru_10: true
    title_overrride_sample_data.avg_thru_10: Avg Order Value
    title_placement_sample_data.avg_thru_10: above
    value_format_sample_data.avg_thru_10: "$##,#0.00"
    style_sample_data.cos_wave: ["#592EC2"]
    show_title_sample_data.cos_wave: true
    title_overrride_sample_data.cos_wave: Customer Retention
    title_placement_sample_data.cos_wave: above
    value_format_sample_data.cos_wave: "##,#0.%"
    show_comparison_sample_data.cos_wave: false
    style_sample_data.num_thru_10: ["#592EC2"]
    show_title_sample_data.num_thru_10: true
    title_overrride_sample_data.num_thru_10: Customers this Month
    title_placement_sample_data.num_thru_10: above
    value_format_sample_data.num_thru_10: "##,#0"
    show_comparison_sample_data.num_thru_10: false
    style_sample_data.line_trend: ["#592EC2"]
    show_title_sample_data.line_trend: true
    title_overrride_sample_data.line_trend: New Customers
    title_placement_sample_data.line_trend: above
    value_format_sample_data.line_trend: "##,#0"
    show_comparison_sample_data.line_trend: false
    style_sample_data.sin_trending: ["#592EC2"]
    show_title_sample_data.sin_trending: true
    title_overrride_sample_data.sin_trending: This Week's Revenue
    title_placement_sample_data.sin_trending: above
    value_format_sample_data.sin_trending: "$##,#0.00"
    show_comparison_sample_data.sin_trending: false
    comparison_style_sample_data.line_trend: calculate_progress_perc
    comparison_show_label_sample_data.line_trend: true
    comparison_label_sample_data.line_trend: Customers this Year
    comparison_label_placement_sample_data.line_trend: below
    comparison_style_sample_data.sin_trending: calculate_progress_perc
    comparison_show_label_sample_data.sin_trending: true
    comparison_label_placement_sample_data.sin_trending: below
    comparison_style_sample_data.num_thru_10: percentage_change
    comparison_show_label_sample_data.num_thru_10: true
    comparison_label_placement_sample_data.num_thru_10: below
    comparison_style_sample_data.cos_wave: percentage_change
    comparison_show_label_sample_data.cos_wave: true
    comparison_label_placement_sample_data.cos_wave: below
    show_tile_sample_data.avg_thru_10: true
    show_tile_sample_data.cos_wave: true
    show_tile_sample_data.num_thru_10: true
    show_tile_sample_data.sin_trending: true
    show_tile_sample_data.line_trend: true
    grouping_layout: vertical
    grouping_font: Open Sans
    series_types: {}
    listen: {}
    row: 0
    col: 0
    width: 6
    height: 23
  - title: Packed Bubble
    name: Packed Bubble
    model: playground
    explore: sample_data
    type: bubble_dev
    fields: [sample_data.sin_trending, sample_data.avg_thru_10, sample_data.linear]
    sorts: [sample_data.avg_thru_10 desc]
    limit: 25
    toColor: ["#683AAE"]
    value_labels: true
    value_titles: true
    size_by: sample_data.sin_trending
    color_by: sample_data.sin_trending
    value_colors: ["#683AAE", "#683AAE", "#683AAE", "#7a43c9", "#a45cff", "#a45cff",
      "#ce9cff", "#ce9cff", "#f0ceff", "#f0ceff", "#f0ceff", "#fff1fc"]
    series_types: {}
    listen: {}
    row: 5
    col: 6
    width: 10
    height: 12
  - title: Untitled
    name: Calendar Heatmap
    model: playground
    explore: sample_data
    type: calendar_dev
    fields: [sample_data.date_date, sample_data.avg_thru_10]
    fill_fields: [sample_data.date_date]
    sorts: [sample_data.date_date desc]
    limit: 500
    column_limit: 50
    overview: global
    show_title: false
    font_size_title: '24'
    show_date_range: false
    font_size_date: '16'
    target_color: "#592EC2"
    sizeshape: 10
    measure: Counts
    tot_measure: Total Counts
    series_types: {}
    listen: {}
    row: 0
    col: 6
    width: 18
    height: 5
  - title: Sunburst
    name: Sunburst
    model: pollooker
    explore: primary
    type: marketplace_viz_sunburst::sunburst-marketplace
    fields: [primary.campaign, primary.state, primary.created_at_month, primary.polling_pct]
    filters:
      primary.campaign: Sanders,Warren,Buttigieg,Biden,Yang,Harris
    sorts: [primary.created_at_month desc]
    limit: 500
    column_limit: 50
    color_range: ["#3EB0D5", "#4276BE", "#5d76bf", "#7a92c2", "#4276BE", "#667dd1",
      "#FFD95F", "#B32F37", "#9174F0", "#E57947", "#4276BE", "#FBB555"]
    color_by: root
    show_null_points: true
    series_types: {}
    row: 30
    col: 0
    width: 10
    height: 13
  - title: Collapsible Tree
    name: Collapsible Tree
    model: pollooker
    explore: primary
    type: marketplace_viz_collapsible_tree::collapsible_tree-marketplace
    fields: [primary.cycle, primary.party, primary.stage, primary.campaign, primary.polling_pct]
    sorts: [primary.cycle]
    limit: 500
    color_with_children: "#5929c2"
    color_empty: "#7029b8"
    series_types: {}
    listen: {}
    row: 23
    col: 0
    width: 16
    height: 7
  - title: Liquid Fill Gauge
    name: Liquid Fill Gauge
    model: pollooker
    explore: primary
    type: marketplace_viz_liquid_fill_gauge::liquid_fill_gauge-marketplace
    fields: [primary.campaign, primary.polling_pct, primary.created_at_week]
    filters:
      primary.campaign: Biden
    sorts: [primary.created_at_week desc]
    limit: 500
    column_limit: 50
    series_types: {}
    listen: {}
    row: 23
    col: 16
    width: 8
    height: 7
  - title: Sankey
    name: Sankey
    model: pollooker
    explore: primary
    type: marketplace_viz_sankey::sankey-marketplace
    fields: [primary.created_at_month, primary.campaign, primary.state, primary.polling_pct]
    filters:
      primary.campaign: Biden,Warren,Sanders,Buttigieg,Harris,Yang
    limit: 500
    column_limit: 50
    series_types: {}
    listen: {}
    row: 30
    col: 10
    width: 14
    height: 13
  - title: Chord
    name: Chord
    model: pollooker
    explore: primary
    type: marketplace_viz_chord::chord-marketplace
    fields: [primary.created_at_month, primary.campaign, primary.polling_pct]
    filters:
      primary.campaign: Biden,Warren,Sanders,Buttigieg,Harris,Yang
    sorts: [primary.created_at_month desc]
    limit: 500
    column_limit: 50
    color_range: ["#6e5bde", "#698fcf", "#38cbf7", "#1630c2", "#5669d4", "#627ac2",
      "#421fb5", "#1c75ed"]
    series_types: {}
    listen: {}
    row: 43
    col: 0
    width: 10
    height: 13
