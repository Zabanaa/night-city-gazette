import React, { Component } from 'react'
import axios from 'axios'
import ProfileNotFound from './ProfileNotFound'
import Loading from './Loading'
import '../styles/userprofile.sass'

class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: this.extractUserIdFromQueryParams(this.props.location.pathname),
            profile: undefined
        }
    }

    componentDidMount() {
        this.fetchUserProfile()
    }

    async fetchUserProfile() {
        const apiUrl = "https://hacker-news.firebaseio.com/v0/user" 
        const profile = await axios.get(`${apiUrl}/${this.state.userId}.json`)
        this.setState({profile: profile.data})
    }

    extractUserIdFromQueryParams(queryParams) {
        const split_url = queryParams.split('/')
        return split_url[split_url.length - 1]
    }

    renderProfile(profile) {
        return (
            <main className="userProfile">
                {/* <h3 className="userProfile__name">{profile.id}</h3> */}
                <h2 className="userProfile__heading">ユーザープロファイル </h2>
                <ul className="userProfile__info">
                    <li>
                        <i className="em em-bear"></i>
                        <span><strong>Name:</strong> {profile.id}</span>
                    </li>
                    <li>
                        <i className="em em-spiral_calendar_pad"></i>
                        <span><strong>Joined:</strong> {profile.created}</span>
                    </li>
                    <li>
                        <i className="em em-star"></i>  
                        <span><strong>Karma:</strong> {profile.karma}</span> 
                    </li>
                    <li>
                        <i className="em em-page_facing_up"></i>
                        <span><strong>Submissions:</strong> {profile.submitted.length}</span>
                    </li>
                    { profile.about && (
                        <React.Fragment>
                            <li>
                                <React.Fragment>
                                    <i className="em em-blond-haired-man"></i>
                                    <span> <strong>Bio: </strong> </span>
                                </React.Fragment>
                            </li>
                            <div className="userProfile__bio" dangerouslySetInnerHTML={{__html: profile.about}}></div>
                        </React.Fragment>
                    )}
                </ul>
            </main>
        )
    }

    renderProfileNotFound() {
        return <ProfileNotFound />
    }

    render() {
        const { profile } = this.state
        if(profile !== undefined) {
            if(profile == null) {
                return this.renderProfileNotFound()
            }
            else {
                return this.renderProfile(this.state.profile)
            }
        }
        else {
            return <Loading />
        }
    }
}

export default UserProfile
