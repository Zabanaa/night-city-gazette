import React from 'react'
import '../emojis.css'
import '../styles/nav.sass'

const Nav = () => {
    return (
        <nav className="night-city-nav">
            <ul className="night-city-nav__list">

                <li className="night-city-nav__link">
                    <i className="em-svg em-fire"></i>
                    <a href="/">Hot</a>
                </li>

                <li className="night-city-nav__link">
                    <i className="em-svg em-newspaper"></i>
                    <a href="/">New</a>
                </li>

                <li className="night-city-nav__link">
                    <i className="em-svg em-question"></i>
                    <a href="/">Ask</a>
                </li>

                <li className="night-city-nav__link">
                    <i className="em-svg em-nerd_face"></i>
                    <a href="/">Jobs</a>
                </li>

                <li className="night-city-nav__link">
                    <i className="em-svg em-eye"></i>
                    <a href="/">Show</a>
                </li>

            </ul>
        </nav>
    )
}

export default Nav
