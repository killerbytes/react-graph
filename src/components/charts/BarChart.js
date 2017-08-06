import React, { Component } from 'react'
import { select } from 'd3-selection'

class BarChart extends Component {
	constructor(props){
		super(props)
		this.createBarChart = this.createBarChart.bind(this)
	}
	componentDidMount() {
		this.createBarChart()
	}
	componentDidUpdate() {
		this.createBarChart()
	}
	createBarChart() {
		const node = this.node
		const {data} = this.props
      
				
		select(node)
			.selectAll("div")
			.data(data)
			.enter()
			.append("div")
			.attr("class", "bar-wrapper")
			.append("div")
			.attr("class", "bar")
			.append("div")
			.attr("class", 'progress')
			.style("width", function(d) { return d.value + "%"; })

		select(node)
			.selectAll('.bar-wrapper')
			.append("strong")
			.text(function(d) { return d.value + "%"; })

				
  }
render() {
	return <div className="bar-chart" ref={node => this.node = node}>
	</div>
	}
}

export default BarChart