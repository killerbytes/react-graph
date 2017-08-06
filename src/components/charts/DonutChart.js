import React, { Component } from 'react'
import { select } from 'd3-selection'
import { arc } from 'd3-shape'
import * as d3 from 'd3'


class DonutChart extends Component {
   constructor(props){
      super(props)
      this.createChart = this.createChart.bind(this)
   }
   componentDidMount() {
      this.createChart()
   }
   componentDidUpdate() {
      this.createChart()
   }
   createChart() {
      const node = this.node
          
      const {size, data, color} = this.props
      const width = size[0]
      const height = size[1]

      const inner =  (width/2) - 10;

      var twoPi = 2 * Math.PI; // Full circle
      
      var max = d3.max(data, function(d) {
        return +d.value;
      });
      

      var radiusBackground = .25;
      var radiusForeground = .25;
      var gap = 13;
      var maxCount = max;// + percent;
      
      var svg = select(node)
        .attr("width", width)
        .attr("height", height);
      
      var g = svg.append("g")
        .attr("transform", "translate(" + width / 10 + "," + height / 10 + ")")
      g.selectAll(".twoPi")
        .data(data).enter()
        .append("path")
        .each(full);
      
      g.selectAll(".outerPath")
        .data(data).enter()
        .append("path")
        .each(drawArc);
      
      function full() {
        var arc1 = arc()
          .startAngle(0)
          .endAngle(twoPi)
          .innerRadius(inner - gap * radiusBackground)
          .outerRadius((width/2) - gap * radiusBackground);
      
        d3.select(this)
          .attr("transform", "translate(" + (width / 2.5) + "," + (height / 2.5) + ")")
          .attr("d", arc1)
          .style("opacity", "0.1");
        radiusBackground++;
      }
      
      function drawArc(d, i) {
        var arc1 = arc()
          .startAngle(0)
          .endAngle((twoPi * (d.value / maxCount)-.0001))
          .cornerRadius(20)
          .innerRadius(inner - gap * radiusForeground)
          .outerRadius((width/2) - gap * radiusForeground);
      
        d3.select(this)
          .attr("transform", "translate(" + (width / 2.5) + "," + (height / 2.5) + ")")
          .attr("d", arc1)
          .attr("id", "path" + i)
          .style('fill', color[i])
          radiusForeground++;
      
      }



   }

  render() {
      return <svg ref={node => this.node = node}>
      </svg>
   }
}



export default DonutChart

