import React, { Component } from 'react';

import Header from '../components/Header';
import HighestMobileUser from '../components/HighestMobileUser';
import KeyboardMouseActivity from '../components/KeyboardMouseActivity';


  class App extends Component {
    render() {
      var highestMobileUser = {
        users: [{
          id: 1,
          name: "Elle Javier - Quingco",
          value: 560
        }, {
          id: 2,
          name: "Lester Douglas",
          value: 85
        }, {
          id: 3,
          name: "Dmitry Shytsko",
          value: 30
        }],
        others:[{
          id: 1,
          name: "Raju Mazumder",
          value: 13
        }, {
          id: 2,
          name: "Khurram Butt",
          value: 13
        }]

    }
        
      var keyboardMouseActivity = {
        users: [{
          id: 1,
          name: "Raju Mazumder",
          value: 13
        }, {
          id: 2,
          name: "Khurram Butt",
          value: 13,
          image: 'assets/user1.png'
        }, {
          id: 3,
          name: "Eslam Mahmoud",
          value: 16
        }, {
          id: 4,
          name: "Evgeny Stashevsky",
          value: 19
        }, {
          id: 5,
          name: "Nataliya Oleynyk",
          value: 25
        }],
        others:[{
          id: 1,
          name: "Raju Mazumder",
          value: 13
        }, {
          id: 2,
          name: "Khurram Butt",
          value: 13
        }, {
          id: 3,
          name: "Evgeny Stashevsky",
          value: 16,
          image: 'assets/user4.png'
        }]
      };

      
      return (
        <div>
          <Header />
          <div className="container">
            <h1>Company Dashboard</h1>
            <KeyboardMouseActivity data={keyboardMouseActivity}/>
            <HighestMobileUser data={highestMobileUser}/>
          </div>
        </div>
      );
    }
  }

export default App;
