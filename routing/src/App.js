import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,Redirect
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/*<Route path={'./'} component={Home}/>*/}
          {/*<Route*/}
          {/*    path='/about'*/}
          {/*    render={()=><div>About Page</div>}*/}
          {/*/>*/}
          {/*<Link to="/user">User Info</Link>*/}
          <Route
              path='/home'
              component={Home}
          />
          <PrivateRoute
            path='/user'
            component={User}
          />
        </Router>
      </div>
    );
  }
}
// const Home=()=><div>Home router page</div>
// class User extends Component{
//   render(){
//     const{match:{params :{name}}}=this.props;
//
//     return(
//         <div>
//           hello {name}
//         </div>
//     )
//   }
// }
export default App;

const Home=()=><div>Home</div>
const User=()=><div>User</div>

const isAuth= ! true;
const PrivateRoute=({component:Component,...props})=>{
  return <Route {...props} render={() => (isAuth ? <Component/> :
  <Redirect
  to='/home'
  />)
  }/>
}