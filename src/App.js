import React from "react";
import "./App.css";
import {Switch,Route} from 'react-router-dom';
import Home from './Views/home';
import Search from "./Views/search";

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact to={"/"} component={Home} />
          <Route exact to={"/search"} component={Search} />

        </Switch>
      </div>
    );
  }
}

export default BooksApp;
