import React,{Component} from 'react';
import {Logo, StyledHeader} from './HeaderSC'
import Navbar from '../Navbar/Navbar';
import Searchbar from '../SearchBar/Searchbar';
import Userdetails from '../UserDetails/Userdetails';
export default class Header extends Component{
    render(){
        return(
            <StyledHeader>
                <Logo/>
                <Navbar/>
                <Searchbar/>
                <Userdetails/>
            </StyledHeader>
        )
    }
}