import React, { Component } from "react";
import Shelf from "../components/Shelf";
import Fab from "../components/Fab";
import { getAll } from "../BooksAPI";

export default class Home extends Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      this.props.addBooks(books)
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
          <Shelf title="Currently Reading" books={this.props.currentlyReading} noveBook={this.props.noveBook} />
          <Shelf title="Want To Read" books={this.props.wantToRead} noveBook={this.props.noveBook} />
          <Shelf title="Read" books={this.props.read} noveBook={this.props.noveBook}  />
        </div>
        <Fab />
      </div>
    );
  }
}
