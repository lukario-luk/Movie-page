import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Shows";

export default class App extends React.Component{
  
  render(){

    return(
      <Router>
        <h1>oi</h1>
        <ul>
          <li> <Link to="/" >Home</Link></li>
          <li><Link to="/movies" >Movies</Link></li>
          <li><Link to="/series" >Series</Link></li>
        </ul>
        <Routes>
          <Route path="/" />	
          <Route path="/movies" element={<Movies/>} />
          <Route path="/series" element={<Series/>} />
        </Routes>

        

      </Router>
    )
  }
}
