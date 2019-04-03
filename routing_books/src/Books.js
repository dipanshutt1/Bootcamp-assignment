import React,{Component} from 'react';
import bookData from './BooksJSON';
import {Link} from 'react-router-dom';

export default class Books extends Component{
    render(){
        console.log(bookData,typeof bookData);
        return (
            <div>
                {bookData.books.map((book)=>{
                    return (
                        <div>
                            <h1>Books Gallery</h1>
                            <h4>{book.title}</h4>
                            <img src={book.thumbnailUrl}/>
                            <Link to={'/book/'+book._id}>View More</Link>
                        </div>

                    )
                })}
            </div>
        )
    }
}
