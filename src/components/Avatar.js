import React, { Component } from 'react'



class Avatar extends Component {
  render() {
    const {user, color} = this.props
    const style = user.image ? { backgroundImage: 'url('+ user.image +')'} : { backgroundColor: color}
    
    var name = user.name.match(/\b\w/g) || [];
    name = ((name.shift() || '') + (name.pop() || '')).toUpperCase();

    const initials = user.image ? '' : <span>{name}</span>
    return (
      <span className="oval" style={ style }>{ initials }</span>
    )
   }
}



export default Avatar

