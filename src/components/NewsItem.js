import React from 'react'
import '../styles/newsitem.sass'

const NewsItem = () => {
    return (
        <article className="newsItem">
            <header className="newsItem__header">
                <h2><a href="/helo">Facebook to acquire startup for controlling computers with the mind.</a></h2>
            </header>
            <ul className="newsItem__info">
                <li>
                    <i className="em em---1"></i> 
                    <span>32</span>
                </li>
                <li>
                    <i className="em em-adult"></i>
                    <span>Bostonian</span> 
                </li>
                <li>
                    <i class="em em-clock1"></i> 
                    <span>4 hours ago</span>
                </li>
                <li>
                    <i class="em em-left_speech_bubble"></i>
                    <span>122</span>
                </li>
            </ul>
        </article>
    )
}

export default NewsItem
