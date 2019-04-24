import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  state={
    inputUserName:'',
    userList:[]
  }

  updateHandle=(e)=>{
    let that=this;
  this.setState({
  inputUserName:e.target.value
  })
  axios.get('http://127.0.0.1:8000/users',{
    params:{
      username:e.target.value
    }
  })
      .then(function (response) {
        that.setState({
          userList:response.data
        })
      })
      .catch(function(error){
        console.log()
      })
  }
  render() {
    return (
      <div>
          <input type="text"
                 placeholder="username"
                 onChange={this.updateHandle}
                 name="inputUserName"
                 value={this.state.inputUserName}
          />
          <ul>
            {this.state.userList.map((elementList)=>{
              return(
                  <li key={elementList.id}>
                    {elementList.username}
                  </li>
              )
            })}
          </ul>
      </div>
    );
  }
}

export default App;
