import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul className='navBar list-item'>
                <li>
                    <Link to="/chess" className='btn btn-primary mt-10'>Tablero de ajedrez</Link>
                </li>
                <li>
                    <Link to="/operationsclass" className='btn btn-primary mt-10'>Oepration Class</Link>
                </li>
                <li>
                    <Link to="/operationsfunctional" className='btn btn-primary mt-10'>Oepration Functional</Link>
                </li>
                <li>
                    <Link to="/toDoList" className='btn btn-primary mt-10'>To do list</Link>
                </li>
            </ul>
        </div>
    )
}
