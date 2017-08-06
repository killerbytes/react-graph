import React, { Component } from 'react'



class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <a href="" className="logo"></a>
          <button type="button" className="navbar-toggle"> 
            <span className="icon-bar"></span> 
            <span className="icon-bar"></span> 
            <span className="icon-bar"></span> 
          </button>
          <nav>
            <a href="" className="active">Dashboard <i className="icon icon-arrow-down"></i></a>
            <a href="">Edit Time</a>
            <a href="">Screenshots</a>
            <a href="">Reports <i className="icon icon-arrow-down"></i></a>
            <a href="">Payments</a>
          </nav>
          <div className="user-bar">
            <a href=""><span className="icon icon-notification"></span></a>
            <a href=""><span className="icon icon-help"></span><i className="icon icon-arrow-down"></i></a>
            <a href=""><span className="icon icon-gear"></span><i className="icon icon-arrow-down"></i></a>
            <a href=""><img src="assets/avatar.png" alt=""/></a>
            <span className="separator"></span>
            <a href=""><span className="icon icon-time"></span><i className="icon icon-arrow-down"></i></a>
          </div>
        </div>
      </header>
    )
   }
}



export default Header

