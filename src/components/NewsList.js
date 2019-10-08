import React from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import queryString from "query-string";
import Paginator from "./Paginator";
import Loading from "./Loading";
import Error from "./Error";
import { API_URL } from "../utils/constants";

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: null,
      lastPage: false,
      error: false,
      pageNumber:
        parseInt(queryString.parse(this.props.location.search)["page"]) || 1
    };
    this.itemsPerPage = 30;
    this.currentPage = this.props.location.pathname;
  }

  componentDidMount() {
    this.fetchStoriesFromHNAPI();
  }

  paginateStories(stories, pageNumber, pageSize = this.itemsPerPage) {
    --pageNumber;
    const start = pageNumber * pageSize;
    const end = (pageNumber + 1) * pageSize;
    return stories.slice(start, end);
  }

  getStoryEndpoint() {
    let endpoint;
    switch (this.currentPage) {
      case "/":
        endpoint = "topstories";
        break;

      case "/new":
        endpoint = "newstories";
        break;

      case "/jobs":
        endpoint = "jobstories";
        break;

      case "/ask":
        endpoint = "askstories";
        break;

      case "/show":
        endpoint = "showstories";
        break;

      default:
        endpoint = "topstories";
    }
    return endpoint;
  }

  _computeStoryId(storyIndex) {
    const pageNumber = this.state.pageNumber - 1;
    const id = storyIndex + 1;
    return pageNumber * this.itemsPerPage + id;
  }

  async fetchStoriesFromHNAPI() {
    const endpoint = this.getStoryEndpoint();

    try {
      const allstories = await axios.get(`${API_URL}${endpoint}.json`);
      const storyIds = this.paginateStories(
        allstories.data,
        this.state.pageNumber
      );

      try {
        const stories = await Promise.all(
          storyIds.map(storyId => this.fetchStoryData(storyId))
        );
        this.setState({
          stories: stories,
          lastPage: stories.length < this.itemsPerPage
        });
      } catch {
        this.setState({ stories: null, error: true });
      }
    } catch {
      this.setState({ stories: null, error: true });
    }
  }

  async fetchStoryData(storyId) {
    const story = await axios.get(`${API_URL}/item/${storyId}.json`);
    return story.data;
  }

  renderNewsList() {
    return (
      <main className="newsList page-content">
        <React.Fragment>
          {this.state.stories.map((story, idx) => (
            <NewsItem key={idx} id={this._computeStoryId(idx)} story={story} />
          ))}
        </React.Fragment>
        <Paginator
          {...this.props}
          pageNumber={this.state.pageNumber}
          isLastPage={this.state.lastPage}
        />
      </main>
    );
  }

  renderLoadingScreen() {
    return <Loading />;
  }

  renderErrorScreen() {
    return <Error />;
  }

  render() {
    if (this.state.stories != null) {
      return this.renderNewsList();
    } else {
      if (this.state.error) {
        return this.renderErrorScreen();
      }
      return this.renderLoadingScreen();
    }
  }
}

export default NewsList;
