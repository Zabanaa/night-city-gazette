import React from 'react'
import NewsItem from './NewsItem'
import '../styles/newslist.sass'

const arr = Array(30).fill(" ")

const NewsList = () => (
    <main className="newsList">
        { arr.map( () => {
            return (
                <NewsItem />
            )
        })}
    </main>
)

export default NewsList
