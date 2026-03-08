// Navbar.js (For Version 5 ONLY)
import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom' // Changed useNavigate to useHistory

const Navbar = () => {
  const [query, setQuery] = useState('')
  const history = useHistory() // Changed hook

  const handleSearch = e => {
    e.preventDefault()
    if (query.trim()) {
      history.push(`/search?query=${query}`) // Changed navigate() to history.push()
      setQuery('')
    }
  }

  return (
    <nav className="navbar">
      <h1>movieDB</h1>
      <div className="nav-links">
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Navbar
