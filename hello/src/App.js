import React, { Component } from 'react';

import Header from './components/header';
import Home from './components/home';

class App extends Component {
  render() {
    const user = {
      name:'cc',
      hobbies:['basketball','football'],
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>hellooooooo</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home name={"MAX"} age={12} user={user}> 
              <p>im your children</p>
            </Home> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
