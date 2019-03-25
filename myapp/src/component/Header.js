import React ,{Component} from 'react';
import './Header.css'
 class Header extends Component{
    render(){
        return (
            <header>
                hello header
                <p>{this.props.count}{}</p>
            </header>
        );
    }
}

export default Header;