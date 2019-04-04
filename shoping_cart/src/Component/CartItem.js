import React ,{Component} from 'react';

export default class CartItem extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className="btnDiv">
                {item.name}
                {item.quantity}
                {item.price}
                <button onClick={()=>this.props.increment(this.props.id)}>+</button>
                <button onClick={()=>this.props.decrement(this.props.id)}>-</button>
                <button onClick={()=>this.props.remove(this.props.id)}>x</button>
            </div>
        )
    }
}