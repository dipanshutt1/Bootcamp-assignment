import React, { Component } from 'react';
import Login from './Login';
import {
  BrowserRouter as Router,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Books from "./Books";

class App extends Component {
  constructor(){
    super();
    this.state={
        isAuth:false,
    }

  }
  isAuthenticate=(isAuth)=>{
      console.log("isAuth",isAuth);
      this.setState({
          isAuth:isAuth
      })
  }

  render() {
    return (
        <Router>
            <Route
              exact path={'/'}
                    render={(props)=><Login {...props}
                            loginCallBack={this.isAuthenticate}
                            isAuth={this.state.isAuth}
            />}
              />
            <PrivateRoute
                path='/books'
                component={Books}
                isAuth={this.state.isAuth}
            />
          </Router>
    );
  }
}
const PrivateRoute=({component:Component,isAuth,...rest})=>{
    if(isAuth===true){
        return <Route {...rest} render={(props)=> <Component {...props}/>}/>
    } else {
        return <Route {...rest} render={(props) => <Redirect to={'/'} {...props}/>
        }/>
    }
}


export default App;
