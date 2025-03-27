/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'


function App() {
const [movies, setMovies] = useState([])

  const getMovieRequest = async () => {
    const url = "https://www.omdbapi.com/?apikey=766f01f2&s=Shape"

    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson)
    setMovies(responseJson.Search)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getMovieRequest()
  }, [])

  return (
   
      <div className='container movie-app'>
        <div className='row'>
          <MovieListHeading heading="Movies"/>
        </div>
        <div className='row'>
      <MovieList movies = {movies} />
      </div>
      </div>


  )
}

export default App
