import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container'>
        <h1>Home</h1>
        <Link to="/chess" className='btn btn-primary'>Link</Link>
    </div>
  )
}
