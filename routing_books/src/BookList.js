import React,{Component} from 'react';
import books from './BooksJSON';
export default class BookList extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            ...books.books[props.match.params.id-1]
        }
    }

    render() {
        let {title,
        thumbnailUrl,shortDescription
        } = this.state;
        return (
            <div>
                <h4>{title}</h4>
                <img src={thumbnailUrl}/>
                <p>{shortDescription}</p>
            </div>
        )
    }
}