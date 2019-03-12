import React, { Component } from "react";
import Shelf from "../components/Shelf";
import Fab from "../components/Fab";
import { getAll } from "../BooksAPI";

export default class Home extends Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      this.props.addBooks(books)
     
    //   console.log(currentlyReading,read,wantToRead)
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1> 
        </div>
        <div className="list-books-content">
          <Shelf title="Currently Reading" books={this.props.currentlyReading} />
          <Shelf title="Want To Read" books={this.props.wantToRead} />
          <Shelf title="Read" books={this.props.read} />
        </div>
        <Fab />
      </div>
    );
  }
}
