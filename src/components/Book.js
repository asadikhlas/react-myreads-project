import React, { Component } from 'react'
import * as BookAPI from '../BooksAPI';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
          book: props.book
        };
      }
    componentDidMount(){
        console.log(this)
    }
    updateBook( shelf) {
        BookAPI.update(this.state.book, shelf).then(resp => {
          this.setState(state => {
              let copy = state.book;
              copy.shelf = shelf;
              this.setState({book: copy})
          })
        });
      }
  render() {
    return (
        <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.state.book.imageLinks && this.state.book.imageLinks.thumbnail || "" }")`}}></div>
                  <div className="book-shelf-changer">
                    <select value={this.state.book.shelf || "none"} onChange={(event)=>{this.updateBook(event.target.value)}} >
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{this.state.book.title || "No title found..."}</div>
                <div className="book-authors">{this.state.book.authors[0] || "No Authors found..."}</div>
              </div>
            </li>
    )
  }
}

export default Book;