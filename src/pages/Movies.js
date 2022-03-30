import React from "react";
import axios from "axios";

const apiMovies = axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=32e1a08c337fe6cd06d685f58ba14f53&language=en-US&page=1",
}) 

export default class Movies extends React.Component{
  state={
    listMovies:[],
  }
 async componentDidMount(){
   const response = await apiMovies.get()
   const Movies = response.data.results.map(superBonde => {
     return {
       ...superBonde,
       poster_path:`https://image.tmdb.org/t/p/w500/${superBonde.poster_path}`
     }})

     this.setState({
       listMovies: Movies
     })
   //use o conslole log com resonse para lembrar o caminho
  }
  
  render(){

    return(
      <div>
        <h1>Filmes</h1>
        <ul>
          {this.state.listMovies.map(item => (
            <div>
            <h2>{item.title}</h2>

            <img src={item.poster_path} alt={`poster do filme ${item.title}`} />
            </div>
          ))}
        </ul>

      </div>
    )
  }
}