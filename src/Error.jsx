import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
      <div className='container'>
        <h1> Error Page</h1>
        <Link to="/" className="btn btn-warning" >Back</Link>
      </div>
  )
}
