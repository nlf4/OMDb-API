import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import 'typeface-roboto';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Form from "./components/Form";
import Results from "./components/Results";
import Loading from "./components/Loading";
import Movie from "./components/Movie";




export default class App extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      movies: {
        loading: false,
        error: false,
        data: []
      }
    };
  }

  
  
  getMovies = str => {
    console.log(React)
    this.setState({
      movies: {
        ...this.state.movies,
        loading: true
      }
    });
    axios
      .get(process.env.REACT_APP_ENDPOINT + "&s=" + str)
      .then(results => {
        console.log(results);
        this.setState({
          movies: {
            ...this.state.movies,
            data: [...results.data.Search],
            loading: false
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <Router>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography align="center" variant="h4">Movie Search</Typography>
          </Toolbar>
        </AppBar>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <Form getMovies={this.getMovies} />
                  {this.state.movies.loading && <Loading />}
                  {this.state.movies.data.length !== 0 && (
                    <Results movies={this.state.movies.data} />
                  )}
                </>
              )}
            />
            <Route
              path="/movie/:id/:title"
              render={props => <Movie {...props} />}
            />
          </Switch>
      </Router>
    );
  }
}
