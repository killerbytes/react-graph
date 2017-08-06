import React, { Component } from 'react'

import BarChart from './charts/BarChart';
import Avatar from './Avatar';
import Select from './Select';
import Dropdown from './Dropdown';

var options = [{
  id: 1,
  name: "Last 7 days"
}, {
  id: 2,
  name: "Monthly"
}];

var widgetOption = [{
  id: 1,
  name: "Edit widget"
},{
  id: 2,
  name: "Delete widget"
}]


class KeyboardMouseActivity extends Component {
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
    const color= ["#F65161", "#F65161", "#5A68C6", "#FFD331", "#36C398"];

    const mappedUsers = data.users.map((item, index)=> {      
      return <li key={item.id}><Avatar user={item} color={color[index]} /> { item.name } </li>
    })
    const mappedOthers = data.others.map((item, index)=> {      
      return <li key={item.id}><Avatar user={item} color={color[index]} /></li>
    })
    
    return (
      <div className="widget">
        <div className="widget-title">
          <h4>Keyboard &amp; Mouse Activity</h4>
          <div className="actions">
            <Select list={options} selected={this.state.selected} onClick={this.handleClick} />
            <Dropdown list={widgetOption} selected={this.state.selected} onClick={this.handleClick} />
          </div>
        </div>
        <div className="widget-content">
          <ul className="list-users">{ mappedUsers }</ul>
          <BarChart data={data.users} color={color} size={[200,200]}/>
        </div>
        <div className="widget-footer">
          <ul className="list-users-inline">{ mappedOthers }</ul>
          <span className="list-users-inline-text">+900 more</span>
          <span className="label">Lowest</span>
        </div>
      </div>
    )
   }
}



export default KeyboardMouseActivity

