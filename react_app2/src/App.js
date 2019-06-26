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
        let {counters:temp_counters} = this.state;


        if(counter_id)
        {
            temp_counters[counter_id]++;

        }
        else{
            for(let i in temp_counters){
                temp_counters[i]++;
            }
        }
        this.setState({
            counters: temp_counters
        }, );

    };


    decreaseCount=(counter_id)=>{
        let {counters:temp_counters1} = this.state;

        if(counter_id)
        {
            temp_counters1[counter_id]--;

        }
        else{
            temp_counters1.forEach((e,i)=>temp_counters1[i]-1)
        }
        this.setState({
            counters: temp_counters1
        })

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