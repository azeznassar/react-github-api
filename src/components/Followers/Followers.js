import React, { Component } from 'react';
import Loading from '../Loading/Loading';

export default class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            dataLoaded: false
        };
    }

    componentDidMount() {
        const currentUser = this.props.match.params.username;
        this.fetchFollowers(currentUser);
    }  
    
    fetchFollowers(user) {
        fetch(`https://api.github.com/users/${user}/followers`)
            .then(response => {
                if (!response.ok) {
                    throw Error('Network request failed');
                }
                return response;
            })
            .then(data => data.json())
            .then(data => this.setState({ data, dataLoaded: true }));
    }
    render() {
        const { data, dataLoaded } = this.state;

        if (!dataLoaded) {
            return (
                <div>
                    <Loading />
                    <p>Fetching data</p>
                </div>
            );
        }

        return (
            <div>
                {data.map(follower => {
                    return (
                        <div key={follower.id} className="follower">
                            Username: {follower.login}
                            <img src={follower.avatar_url} alt="Follower Avatar"/>
                            <a href={follower.html_url}>Profile on Github</a>
                        </div>
                    );
                })} 
            </div>       
        );
    }
}
