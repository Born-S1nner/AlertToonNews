import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link className="title" to="/AlertToonNews">
                <h1 className="headLink">
                    Alert-Toon<hr/>
                    Where art turns into a story has news
                </h1>
            </Link>
            <nav className="navbar">
                <div className="dropdown-content">
                    <Link className="panel-button" to="/Series">Upcoming Series</Link>
                    <Link className="panel-button" to="/Event">Upcoming Events</Link>
                    <Link className="panel-button" to="/About" >About</Link>
                </div>  
            </nav>
        </div>
    )
}

export default Header
