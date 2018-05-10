import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      age : this.props.age,
    }
  }

  onMakeOlder (){
    this.setState({
      age:this.state.age + 3,
    })
  }


  handleGreet(){
    this.props.greet(this.state.age)
  }


  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <button onClick = {this.handleGreet.bind(this)} className="btn btn-primary">img child</button>
            <h1>HOME</h1>
            <h2>you age is {this.state.age}</h2>
            <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">im button</button>
          </div>
          <hr/>
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

