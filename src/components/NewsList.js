import React from 'react'
import NewsItem from './NewsItem'
import '../styles/newslist.sass'
import axios from 'axios';

class NewsList extends React.Component {

    API_URL = 'https://hacker-news.firebaseio.com/v0/'

    state = {
        stories: null
    }
    
    componentDidMount() {
        this.fetchStoriesFromHNAPI()
    }
    
    getStoryEndpoint() {
        let endpoint
        switch (this.props.location.pathname) {
            case '/':
                endpoint = 'topstories'
                break;

            case '/new':
                endpoint = 'newstories'
                break

            case '/jobs':
                endpoint = 'jobstories'
                break

            case '/ask':
                endpoint = 'askstories'
                break

            case '/show':
                endpoint = 'showstories'
                break

            default:
                endpoint = 'topstories'
        }
        return endpoint
    }

    async fetchStoriesFromHNAPI() {
        const endpoint = this.getStoryEndpoint()
        const topstories =  await axios.get(`${this.API_URL}${endpoint}.json`)
        const storyIds = topstories.data.slice(0, 30);
        const stories = await Promise.all(storyIds.map( storyId => this.fetchStoryData(storyId)))
        this.setState({stories: stories})
    }

    async fetchStoryData(storyId) {
        const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        return story.data
    }

    renderNewsList() {
        return (
            <main className="newsList">
                {this.state.stories.map( (story, idx) => (
                    <NewsItem key={idx} story={story} />
                ))}
            </main>
        )
    }

    renderLoadingScreen() {
        return (
            <span>Loading ...</span>
        )
    }

    render() {
        if (this.state.stories != null) {
            return this.renderNewsList()
        }
        else {
            return this.renderLoadingScreen()
        }
    }
}

export default NewsList
