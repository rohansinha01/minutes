import React from 'react'

const MovieListHeading = (props) => {
  return (
    <div className='col'>
        <h1>{props.heading}</h1>
        <h1>{props.searchValue}</h1>
    </div>
  )
}

export default MovieListHeading