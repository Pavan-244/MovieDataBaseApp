import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import {API_KEY, BASE_URL} from '../config'

// Fix: Define exact heading text mapping
const pageTitles = {
  popular: 'Popular',
  top_rated: 'Top Rated',
  upcoming: 'Upcoming',
}

const MoviePage = ({type}) => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const searchQuery = searchParams.get('query')

  useEffect(() => {
    const fetchMovies = async () => {
      let url = ''

      if (type === 'search') {
        url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}`
      } else {
        url = `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
      }

      try {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
        setTotalPages(data.total_pages || 1)
      } catch (error) {
        console.error('Failed to fetch movies:', error)
      }
    }

    fetchMovies()
  }, [type, page, searchQuery])

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1)
  }

  return (
    <div className="container">
      <h2>
        {type === 'search'
          ? `Results for "${searchQuery}"`
          : pageTitles[type] || 'Movies'}
      </h2>

      <div className="grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination
        page={page}
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={page === 1}
        disableNext={page === totalPages}
      />
    </div>
  )
}

export default MoviePage
