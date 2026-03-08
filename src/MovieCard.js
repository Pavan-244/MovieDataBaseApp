import React from 'react'
import {useNavigate} from 'react-router-dom' // Use useHistory if on v5
import {IMAGE_BASE_URL} from '../config'

const MovieCard = ({movie}) => {
  const navigate = useNavigate() // Use const history = useHistory() if on v5

  const handleNavigate = () => {
    navigate(`/movie/${movie.id}`) // Use history.push(`/movie/${movie.id}`) if on v5
  }

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : 'https://via.placeholder.com/500x750'
        }
        alt={movie.title}
      />
      <div className="card-info">
        <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
        {/* Requirement Fix: Must be an HTML button element */}
        <button className="btn" type="button" onClick={handleNavigate}>
          View Details
        </button>
      </div>
    </div>
  )
}

export default MovieCard
