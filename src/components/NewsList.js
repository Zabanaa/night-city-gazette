import React from 'react'
import NewsItem from './NewsItem'
import '../styles/newslist.sass'
import { Consumer } from '../context.js'
import axios from 'axios';

const arr = Array(30).fill(" ")

class NewsList extends React.Component {

    // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
    // https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty
    // https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty
    // https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty
    // https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty

    // show the first 30 then add pagination
    
    componentWillMount() {
        // make the api call here
        // use async await
        // first log 
        // then promise.all to get all the info about said stories
    }

    render() {
        return (
            <Consumer>
                { value => {
                    return (
                        <main className="newsList">
                            hello
                        </main>
                    )
                }}
            </Consumer>
        )
    }
}
// const NewsList = () => (
//     <main className="newsList">
//         { arr.map( () => {
//             return (
//                 <NewsItem />
//             )
//         })}
//     </main>
// )

export default NewsList
