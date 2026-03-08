import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {API_KEY, BASE_URL, IMAGE_BASE_URL} from './config'

const SingleMovie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Fetch Movie Details
        const movieRes = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
        )
        const movieData = await movieRes.json()
        setMovie(movieData)

        // Fetch Cast
        const castRes = await fetch(
          `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
        )
        const castData = await castRes.json()
        setCast(castData.cast)
      } catch (error) {
        console.error('Error fetching details:', error)
      }
    }

    fetchDetails()
  }, [id])

  if (!movie) return <div>Loading...</div>

  return (
    <div className="details-container">
      <img
        className="details-img"
        src={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : 'https://via.placeholder.com/500x750'
        }
        alt={movie.title}
      />
      <div className="details-info">
        <h1>{movie.title}</h1>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
        <p>
          <strong>Duration:</strong> {movie.runtime} min
        </p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Overview:</strong> {movie.overview}
        </p>

        <h3>Cast</h3>
        <div className="cast-grid">
          {cast.slice(0, 12).map(actor => (
            <div key={actor.id} className="cast-card">
              <img
                src={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${actor.profile_path}`
                    : 'https://via.placeholder.com/100'
                }
                alt={actor.name}
              />
              <p>{actor.original_name}</p>
              <p style={{color: '#666'}}>as {actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SingleMovie
