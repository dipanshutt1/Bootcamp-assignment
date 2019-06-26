import React ,{Component} from 'react'
import './Counter.css'

class Counter extends Component{
constructor(props){
    super(props);
    this.state={
        count:0,
    };
}

componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
        count: nextProps.parent_count
    })
}

    render() {

    let {increaseCallback, decreaseCallback, parent_count, counter_id} = this.props

    return (
        <div>
            <button onClick={() => increaseCallback(counter_id)}> + </button>
            <span>{this.state.count}</span>
            <button onClick={()=>decreaseCallback(counter_id)}> - </button>
        </div>
    );
}
}

export default Counter;
