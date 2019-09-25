import React from 'react'
import '../styles/newsitem.sass'

const NewsItem = ({story}) => {
    return (
        <article className="newsItem">
            <header className="newsItem__header">
                <h2><a href={story.url}>{story.title}</a></h2>
            </header>
            <ul className="newsItem__info">
                <li>
                    <i className="em em---1"></i> 
                    <span>{story.score}</span>
                </li>
                <li>
                    <i className="em em-adult"></i>
                    <span>{story.by}</span> 
                </li>
                <li>
                    <i className="em em-clock1"></i> 
                    <span>{story.time}</span>
                </li>
                <li>
                    <i className="em em-left_speech_bubble"></i>
                    <span>{story.descendants}</span>
                </li>
            </ul>
        </article>
    )
}

export default NewsItem