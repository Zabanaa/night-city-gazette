import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { extractIdFromURL, timeAgo } from "../utils";

class AskHN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: undefined
    };
  }

  componentDidMount() {
    this.fetchStoryContent();
  }

  async fetchStoryContent() {
    const storyId = extractIdFromURL(this.props.location.pathname);
    const story = await axios.get(`${API_URL}/item/${storyId}.json`);
    this.setState({ story: story.data });
  }

  renderPage() {
    const { story } = this.state;
    return (
      <main>
        <h2>{story.title}</h2>
        <ul>
          <li>
            <i className="em-svg em-fire"></i>
            <span>{story.score}</span>
          </li>
          <li>
            <i className="em-svg em-left_speech_bubble"></i>
            <span>{story.descendants}</span>
          </li>
          <li>
            <i className="em-svg em-clock1"></i>
            <span>{timeAgo(story.time)}</span>
          </li>
          <li>
            <i className="em-svg em-man"></i>
            <span>{story.by}</span>
          </li>
        </ul>
        <article dangerouslySetInnerHTML={{ __html: story.text }}></article>
      </main>
    );
  }

  renderError() {
    return <p>This story does not exist sorry.</p>;
  }

  render() {
    if (!this.state.story || this.state.story === null) {
      return this.renderError();
    } else {
      return this.renderPage();
    }
  }
}

export default AskHN;
