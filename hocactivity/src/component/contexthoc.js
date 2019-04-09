import React, { Component } from 'react';
import mycontext from '../mycontext';


export default WrappedComponent => {
    class Userdetails extends Component {
        static contextType = mycontext;
        log = () => console.log(this.contextType);
        render() {
            return (
                <WrappedComponent value={this.context}
                />
            );
        }
    };
    return Userdetails
};
