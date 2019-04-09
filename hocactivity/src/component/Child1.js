import React, { Component } from 'react';
import Userdetails from './contexthoc';

class Child1 extends Component {
    render() {
        console.log("child 1",this.props.value.logindetails);
        let {username} = this.props.value.logindetails;
        // console.log(username);
        return (
            <div>
                <h5>Rendering Child 1 component</h5>
                Name: {username}
            </div>
        );
    }
}

export default Userdetails(Child1);