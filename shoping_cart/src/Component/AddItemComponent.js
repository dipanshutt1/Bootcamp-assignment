import React ,{Component} from 'react';

export default class AddItemComponent extends Component{
    constructor(){
        super();
        this.state={
            item:''
        }
    }
    onHandleSubmit=(e)=>{
        let {item} = this.state;
        e.preventDefault();
        this.props.callback({
            name:item.split('-')[0],
            quantity: 1,
            price: item.split('-')[1]
        })
    }

    onHandleChange=(e)=>{
        this.setState({
            item:e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onHandleSubmit}>
                    <input type="text" onChange={this.onHandleChange} value={this.state.item} placeholder="Enter item and price separated by a - (hyphen)"/>
                    <button>+</button>
                </form>
            </div>
        );
    }
}