import React from 'react'
import './Pagination.css'

const Pagination = ({page, onPrev, onNext, disablePrev, disableNext}) => (
  <div className="pagination">
    <button className="pagination-btn" disabled={disablePrev} onClick={onPrev}>
      Prev
    </button>
    <span className="pagination-page">Page {page}</span>
    <button className="pagination-btn" disabled={disableNext} onClick={onNext}>
      Next
    </button>
  </div>
)

export default Pagination
