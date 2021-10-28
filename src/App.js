
import './App.css';
import SideNav from './components/sideNavBar/sideNav';
import TopNav from './components/topNavBar/topNav';
import React, { Component } from 'react';
import BodyFrom from './components/bodyForm/bodyForm';

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className = "topNav">
          <TopNav />
        </div>
        <div className = "body">
          <div className = "sideNav">
            <SideNav />
          </div>
          <div className="mainContent">
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-primary">Secondary</button>
            <button type="button" class="btn btn-primary">Tertiary</button>
            <button type="button" class="btn btn-primary">Close</button>
            <div clasName="bodyForm">
            <BodyFrom />
          </div>
          </div>
        </div>
    </div>
    );
  };
}

export default App;
