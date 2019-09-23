import React from 'react'
import '../emojis.css'

const Nav = () => {
    return (
        <nav className="night-city-nav">
            <ul>
                <li>
                    <i class="em-svg em-fire"></i>
                    <a href="/">Hot</a>
                </li>
                <li>
                    <i class="em-svg em-newspaper"></i>
                    <a href="/">New</a>
                </li>
                <li>
                    <i class="em-svg em-question"></i>
                    <a href="/">Ask</a>
                </li>
                <li>
                    <i class="em-svg em-nerd_face"></i>
                    <a href="/">Jobs</a>
                </li>
                <li>
                    <i class="em-svg em-eye"></i>
                    <a href="/">Show</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
