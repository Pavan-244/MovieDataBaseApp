import React from 'react'
import './Pagination.css'

const Pagination = ({page, onPrev, onNext, disablePrev, disableNext}) => (
  <div className="pagination">
    <button className="pagination-btn" disabled={disablePrev} onClick={onPrev}>
      Prev
    </button>
    <p className="pagination-page">{page}</p>
    <button className="pagination-btn" disabled={disableNext} onClick={onNext}>
      Next
    </button>
  </div>
)

export default Pagination
