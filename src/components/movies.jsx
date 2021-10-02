import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService'

class Movies extends React.Component {
  state = {
    movies: getMovies(),
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id)
    this.setState({ movies })
  }
  render() {
    const { length: count } = this.state.movies
    if (count === 0) return <p>No movies</p>
    return (
      <React.Fragment>
        <p>There are {count} movies in the database</p>
        <table className='table table-dark table-striped'>
          <thead>
            <tr>
              <td>Title</td>
              <td>Genre</td>
              <td>Stock</td>
              <td>Rate</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className='btn btn-danger btn-sm'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Movies
