/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'
import FavMovies from './components/FavMovies'


function App() {
const [movies, setMovies] = useState([])
const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?apikey=766f01f2&s=${searchValue}`

    const response = await fetch(url)
    const responseJson = await response.json()
    
    if(responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
   
      <div className='container movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading="Movies" searchValue={searchValue} />
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className='row'>
      <MovieList movies = {movies} favComponent={FavMovies}/>
      </div>
      </div>


  )
}

export default App
