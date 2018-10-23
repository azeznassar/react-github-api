import React, { Component } from 'react';
import './Nav.css';
import { withRouter, Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            followersLink: '',
            followingLink: '',
            profileLink: ''
        };
    }

    componentDidMount() {
        this.setState({
            followersLink: `/${this.props.user}/followers`,
            followingLink: `/${this.props.user}/following`,
            profileLink: `/${this.props.user}`
        });
    }

    render() {
        return (
            <div className="profileNav">
                <nav className="navBar">
                    <Link to={this.state.profileLink}>
                        Repos: <span>{this.props.repos}</span>
                    </Link>

                    <Link to={this.state.followersLink}>
                        Followers: <span>{this.props.followers}</span>
                    </Link>

                    <Link to={this.state.followingLink}>
                    Following: <span>{this.props.following}</span>
                    </Link>
                </nav>
            </div>
        );
    }
}

export default withRouter(Nav);