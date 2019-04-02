import React,{Component} from 'react';
import AddItemComponent from "./AddItemComponent";
import CartItem from "./CartItem";


export default class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {name:'mango',quantity:2,price:50},
                {name:'orange',quantity:1,price:40},
                {name:'apple',quantity:2,price:100}
            ]
        }
    }
    addItem=(item)=>{
        console.log(item);
        this.setState({
            items: [...this.state.items, item]
        })

    }
    increment=(id)=>{
        let arr = this.state.items;
        arr[id].quantity++;
        this.setState({
            items: arr
        })
    }
    decrement=(id)=>{
        let arr = this.state.items;
        if(arr[id].quantity>1){
            arr[id].quantity--;
            this.setState({
                items: arr
            })
        } else {
            this.removeItem(id);
        }
    }
    removeItem=(id)=>{
        let arr = this.state.items;
        arr.splice(id, 1)
        this.setState({
            items: arr
        })
    }
    total=()=>{
        let total = 0;
        for(let i=0; i<this.state.items.length; i++){
            total += (this.state.items[i].price*this.state.items[i].quantity)
        }
        return total;
    }

    render(){

        return (
            <div>
                <AddItemComponent callback={this.addItem}/>
                {this.state.items.map((item, index) => {
                    return (
                        <CartItem item={item}
                                  increment={this.increment}
                                  decrement={this.decrement}
                                  remove={this.removeItem}
                                  id={index}
                                  key={index}
                        />
                    )
                })
                }
                <span>Total: {this.total()}</span>
            </div>
        )
    }
}