import React, { Component } from 'react';

import Header from './components/header';
import Home from './components/home';
import Headers from './components/noStateComponent'

class App extends Component {
  constructor(){
    super();
    this.state={
      imhome : 'Homeeeee',
    }
  }

  onGreet(age){
    alert(age)
  }

  changeName(newname){
    this.setState({
      imhome:newname
    })
  }

  render() {
    const user = {
      name:'cc',
      hobbies:['basketball','football'],
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header imhome = {this.state.imhome}/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>hellooooooo</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home name={"MAX"} age={12} user={user} greet={this.onGreet} changeName={this.changeName.bind(this)}> 
              <p>im your children</p>
            </Home> 
          </div>
        </div>

        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Headers/> 
          </div>
        </div>

      </div>
    );
  }
}

export default App;
