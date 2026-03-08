// App.js (For Version 5 ONLY)
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' // Changed Routes to Switch
import Navbar from './Navbar'
import MoviePage from './MoviePage'
import SingleMovie from './SingleMovie'
import './styles.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MoviePage type="popular" />
        </Route>
        <Route path="/top-rated">
          <MoviePage type="top_rated" />
        </Route>
        <Route path="/upcoming">
          <MoviePage type="upcoming" />
        </Route>
        <Route path="/search">
          <MoviePage type="search" />
        </Route>
        <Route path="/movie/:id">
          <SingleMovie />
        </Route>
      </Switch>
    </Router>
  )
}
