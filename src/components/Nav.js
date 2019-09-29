import React from 'react'
import { Link } from 'react-router-dom'
import '../emojis.css'
// import '../styles/nav.sass'

const Nav = () => {
    return (
        <nav className="night-city-nav">
            <ul className="night-city-nav__list">

                <li className="night-city-nav__link">
                    <i className="em-svg em-fire"></i>
                    <Link to="/">Hot</Link>
                </li>

                <li className="night-city-nav__link">
                    <i className="em-svg em-newspaper"></i>
                    <Link to="/new">New</Link>
                </li>

                <li className="night-city-nav__link">
                    <i className="em-svg em-question"></i>
                    <Link to="/ask">Ask</Link>
                </li>

                <li className="night-city-nav__link">
                    <i className="em-svg em-nerd_face"></i>
                    <Link to="/show">Show</Link>
                </li>

                <li className="night-city-nav__link">
                    <i className="em-svg em-eye"></i>
                    <Link to="/jobs">Jobs</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Nav
