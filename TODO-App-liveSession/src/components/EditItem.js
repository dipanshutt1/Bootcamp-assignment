import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditItem extends Component{
    
    onEdit = event =>{
        this.props.location.onEdit(event);
        this.props.history.push('/');
    }

    render(){
        return(
            <div className='itemdiv'>
                <form onSubmit={this.onEdit} method='post' action='http://localhost:3001/getdata'>
                    <input type="text" placeholder="type changes here" defaultValue={this.props.name}/>

                    <br/><br/>
                    <button type="submit">Update</button>
                </form>
                <Link to="/">Back</Link>
            </div>
        )
    }
}

export default EditItem;