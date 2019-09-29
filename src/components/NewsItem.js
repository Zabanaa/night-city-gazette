import React from 'react'
import { parseTime } from '../utils'
import { Link } from 'react-router-dom'
// import '../styles/newsitem.sass'

const NewsItem = ({story}) => {
    return (
        <article className="newsItem">
            { story !== null ? (
                <React.Fragment>
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
                            <span><Link to={`/user/${story.by}`}>{story.by}</Link></span> 
                        </li>
                        <li>
                            <i className="em em-clock1"></i> 
                            <span>{parseTime(story.time)}</span>
                        </li>
                        <li>
                            <i className="em em-left_speech_bubble"></i>
                            <span><a href={`https://news.ycombinator.com/item?id=${story.id}`}>{story.descendants}</a></span>
                        </li>
                    </ul>
                </React.Fragment>
            ): 

            <header className="newsItem__header">
                <h2 className="story-not-found"> 
                    <span>This story could not be retrieved ... </span>
                    <i className="em em-cry"></i>
                </h2>
            </header>
            }
        </article>
    )
}

export default NewsItem