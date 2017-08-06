import React, { Component } from 'react'

import DonutChart from './charts/DonutChart';
import Avatar from './Avatar';
import Select from './Select';
import Dropdown from './Dropdown';

var options = [{
  id: 1,
  name: "Monthly"
}, {
  id: 2,
  name: "Last 7 days"
}];

var widgetOption = [{
  id: 1,
  name: "Edit widget"
},{
  id: 2,
  name: "Delete widget"
}]


class HighestMobileUser extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: options[0]};
    this.handleClick = this.handleClick.bind(this)
  }  
  
  handleClick(item){
    this.setState({ selected: item });
  }
  render() {
    const {data} = this.props;
    const color= ["#5A68C6", "#FFD331", "#F65161"];

    const mappedData = data.users.map((item, index)=> <li key={item.id}><span className="dot" style={{backgroundColor: color[index]}}></span> <span><div>{ item.name }</div><strong>{ item.value }</strong></span> </li>)
    const mappedOthers = data.others.map((item, index)=> {      
      return <li key={item.id}><Avatar user={item} color={color[index]} /></li>
    })

        
    return (
      <div className="widget">
        <div className="widget-title">
          <h4>Highest percentage of Mobile Time Users</h4>
          <div className="actions">
            <Select list={options} selected={this.state.selected} onClick={this.handleClick} />
            <Dropdown list={widgetOption} selected={this.state.selected} onClick={this.handleClick} />
          </div>
        </div>
        <div className="widget-content">
          <ul className="list-dotted">{mappedData}</ul>
          <div className="flex-chart">
            <DonutChart data={data.users} color={color} size={[180,180]}/>
          </div>
        </div>
        <div className="widget-footer">
          <ul className="list-users-inline">{mappedOthers}</ul>
          <span className="label">Highest</span>
        </div>
      </div>
    )
   }
}



export default HighestMobileUser

