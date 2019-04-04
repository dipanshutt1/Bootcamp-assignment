import React,{Component} from 'react';
import {NavComponent, NavList} from './NavbarSC';
export default class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            navLinks: [
                {
                    linkName: 'men', id: 1
                },
                {
                    linkName: 'women', id: 2
                },
                {
                    linkName: 'kids', id: 3
                },
                {
                    linkName: 'home & living', id: 4
                },
                {
                    linkName: 'discover', id: 5
                },

            ]
        }
    }
    render(){
        return(
                <NavComponent>
                    {
                        this.state.navLinks.map(element=>(
                            <NavList key={element.id}>
                                {element.linkName}
                            </NavList>
                        ))
                    }
                </NavComponent>
        )
    }
}