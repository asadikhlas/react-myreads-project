import React, { Component } from "react";
export const MyContext = React.createContext();

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
  }
  render() {
    return (
      <MyContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
