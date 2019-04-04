import React,{Component} from 'react';
import {SearchBarStyle} from './SearchbarSC';
export default class Searchbar extends Component{
    render(){
        return(
            <SearchBarStyle>
                <span/>
                <input type="text" placeholder="Search for products,brands and more"/>
            </SearchBarStyle>
        )
    }
}