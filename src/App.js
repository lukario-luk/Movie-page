import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import HDF from "./assets/icon.png"
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  text-decoration:none;
  color:white;
}

`
const BodyApp = styled.div`
  width:100%;
  min-height:100vh;
  background-color:#050505;


`

const Nav = styled.nav`
  width:100%;
  height:7vh;
  padding:1.3%;
  display:flex;
  align-items:center;
  background-color:#0a0908;
  img {
    width:8vh;
    height:8vh;
  }
  h1{
    margin-left:1%;
    font-size:1.6em;
    color:white;
  }
`
const Ul = styled.ul`
  width:100%;
  display:flex;
  li{
    padding:10%;
    list-style:none;
  }
  li a{
    font-size:1.5em;
    color:white;
    text-decoration:none;
    &:hover{
      border-radius:50%;
      color:#f8f9fa;
      text-shadow: 0px 0px 3px #f8f9fa;
    }
  }
`
export default class App extends React.Component{
  
  render(){

    return(
      <Router>
        <GlobalStyle/>
        <BodyApp>
        <Nav>
        <img src={HDF} />
        <h1>Movies and Series</h1>
        <Ul>
          <li> <Link to="/" >Home</Link></li>
          <li><Link to="/movies" >Movies</Link></li>
          <li><Link to="/series" >Series</Link></li>
        </Ul>
        </Nav>
        <Routes>
          <Route path="/" />	
          <Route path="/movies" element={<Movies/>} />
          <Route path="/series" element={<Series/>} />
        </Routes>

        
        </BodyApp>
      </Router>
    )
  }
}
