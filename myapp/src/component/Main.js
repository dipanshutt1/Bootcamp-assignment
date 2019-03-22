import React ,{Component} from 'react';
import './Main.css';
export default class Main extends Component{
    render(){
        return (
            <div id="main">
             <p>hello main</p>
             <button onClick={this.props.func}>Click me</button>
             
            </div>
        )
    }
}