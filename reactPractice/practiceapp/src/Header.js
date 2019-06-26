import React ,{Component} from 'react';

class Header extends Component{
    // clickme(){
    //     alert('hello alert');
    // }

    constructor(){
        super();
        this.state={
            count:0
        };
    }

    var increaseCount=()=>{
        this.setState({
            count:this.state.count +1
        })
    }
    render(){
        return(
            <div>
            {/* <h1>{this.props.header}</h1>
            <button onClick={this.clickme}>Click</button> */}

            <h2>Value is :{this.state.count}</h2>
            <button onClick={this.increaseCount}>Increase count</button>
            </div>
        );
    }
}
// Header.propTypes={
//     name:propTypes.string,
//     propArray:propTypes.array.isRequired,
// };
// Header.defaultProps={
//     name:'deepanshu',
//     propArray:[1,2,3],
// };

export default Header;
