import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

class App extends Component{
    constructor(){
        super();
        this.state={
            counters: [0, 0, 0]
        }
    }

    increaseCount = (counter_id) => {
        let temp_counters = this.state.counters;

        if(counter_id)
        {
            temp_counters[counter_id]++;
            console.log(temp_counters)

        }
        else{
            for(let i in temp_counters){
                temp_counters[i]++;
            }
        }
        this.setState({
            counters: temp_counters
        }, () => console.log(this.state));

    };


    decreaseCount=(counter_id)=>{
        let temp_counters1 = this.state.counters;

        if(counter_id)
        {
            temp_counters1[counter_id]--;
            console.log(temp_counters1)

        }
        else{
            for(let i in temp_counters1){
                temp_counters1[i]--;
            }
        }
        this.setState({
            counters: temp_counters1
        }, () => console.log(this.state));

    }
    render(){

        let counters_arr = this.state.counters.map((element, index) => <Counter increaseCallback={this.increaseCount} decreaseCallback={this.decreaseCount} counter_id={index} parent_count={element}/>);

        return(
        <div>

            {counters_arr}

        <button onClick={() => this.increaseCount()}>IncreaseAll</button>
        <button onClick={()=>this.decreaseCount()}>DecreaseAll</button>
        </div>
    )
  }
}

export default App