import React, { Component } from 'react';
import './App.css';
import Login from './component/Login';
import Child1 from './component/Child1';
import mycontext from './mycontext';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      logindetails: {
      }
    }
  }
  handleOnSubmit = (loginUser,event) =>{
    console.log('Heloo');
    event.preventDefault();

    let newlogindetails = {};
    newlogindetails = {...this.state.logindetails,...loginUser}
    this.setState({
      logindetails:newlogindetails
    })
  }
  render() {
    console.log(this.state.logindetails)
    return (
      <div>
      <Login handleOnSubmit={this.handleOnSubmit}/>
      <h3>Rendering Parent Component</h3>
      
      <mycontext.Provider value={this.state}>
      <Child1/>
      </mycontext.Provider>
      </div>
    );
  }
}

export default App;
