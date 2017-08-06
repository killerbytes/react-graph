import React, { Component } from 'react'

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {listVisible: false};

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.select = this.select.bind(this)
  }  
  
  select(item) {
    this.props.selected = item;
  }
        
  show(){
    this.setState({ listVisible: true });
    document.addEventListener("click", this.hide);
  }
        
  hide() {
    this.setState({ listVisible: false });
    document.removeEventListener("click", this.hide);
  }
      
  render() {

    const mappedList = this.props.list.map((item, index)=> {      
      return <li key={item.id} onClick={this.props.onClick.bind(null, item)}>{item.name}</li>
    })

    return <div className={"az-dropdown" + (this.state.listVisible ? " show" : "")}>
      <button className={"az-toggle" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
        <i className="icon icon-settings"></i>
      </button>
      <ul className="az-menu">
        { mappedList }
      </ul>
    </div>;
  }
        
};
      
export default Dropdown