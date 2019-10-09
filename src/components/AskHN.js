import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import Loading from "./Loading";
import StoryNotFound from "./StoryNotFound";

import {
  extractIdFromURL,
  timeAgo,
  linkToUserProfile,
  linkToStoryOnHN
} from "../utils";

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
      <main className="askhn container">
        <div className="askhn__content page__content">
          <h2 className="askhn__heading">{story.title}</h2>
          <ul className="askhn__meta">
            {story.score && (
              <li>
                <i className="em-svg em-fire"></i>
                <span>{story.score}</span>
              </li>
            )}
            {story.by && (
              <li>
                <i className="em-svg em-man"></i>
                <span>
                  <a href={linkToUserProfile(story.by)}>{story.by}</a>
                </span>
              </li>
            )}
            {story.time && (
              <li>
                <i className="em-svg em-clock1"></i>
                <span>{timeAgo(story.time)}</span>
              </li>
            )}
            {story.descendants && (
              <li>
                <i className="em-svg em-left_speech_bubble"></i>
                <span>{story.descendants}</span>
              </li>
            )}
          </ul>
          <article
            className="askhn__body"
            dangerouslySetInnerHTML={{ __html: story.text }}
          ></article>
          <a className="askhn__link" href={linkToStoryOnHN(story.id)}>
            <i className="em-svg em-left_speech_bubble"></i>
            <span>Add a comment</span>
          </a>
        </div>
      </main>
    );
  }

  render() {
    if (this.state.story === undefined) {
      return <Loading />;
    }
    if (this.state.story === null) {
      return <StoryNotFound />;
    } else {
      return this.renderPage();
    }
  }
}

export default AskHN;
