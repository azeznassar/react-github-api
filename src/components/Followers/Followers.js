import React, { Component } from 'react';
import Loading from '../Loading/Loading';

export default class Follow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            dataLoaded: false
        };
    }

    componentDidMount() {
        const currentUser = this.props.match.params.username;
        this.fetchUsers(currentUser);
    }  
    
    fetchUsers(user) {
        fetch(`https://api.github.com/users/${user}/${this.props.query}`)
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
                {data.map(user => {
                    return (
                        <div key={user.id} className="users">
                            Username: {user.login}
                            <img src={user.avatar_url} alt="User Avatar"/>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">Profile on Github</a>
                        </div>
                    );
                })} 
            </div>       
        );
    }
}
