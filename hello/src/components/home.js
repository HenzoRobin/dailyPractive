import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>HOME</h1>
            <h2>your name is {this.props.name}</h2>
            <h2>your age is {this.props.age}</h2>
            <h2>your hobbies is :</h2>
            {this.props.user.hobbies.map( (hobby,idx) => <li key={idx}> {hobby} </li> ) }
          </div>
          <h6>{this.props.children}</h6>
        </div>
      </div>
    );
  }
}

Home.propTypes={
  name:PropTypes.string,
  age:PropTypes.number,
  user:PropTypes.object,
}
export default Home;

