import React from 'react';
import './Github.css';
import Loading from '../Loading/Loading';
import Repos from '../Repos/Repos';
import Nav from '../Nav/Nav';

class Github extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            repos: [],
            dataLoaded: false,
            invalidUsername: false
        };
    }

    componentDidMount() {
        const currentUsername = this.props.match.params.username;
        this.fetchUserData(currentUsername);
        this.fetchRepos(currentUsername);
    }

    fetchUserData(username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw Error('Network request failed');
                }
                return response;
            })
            .then(data => data.json())
            .then(data => {
                this.setState({
                    data,
                    dataLoaded: true
                });
            }, () => {
                this.setState({
                    invalidUsername: true
                });
            });
    }

    fetchRepos(username) {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(resp => {
                if(!resp.ok) {
                    throw Error('Network request failed');
                }
                return resp;
            })
            .then(data => data.json())
            .then(data => {
                this.setState({ repos: data });
            });
    }

    render(){
        const { data, dataLoaded, invalidUsername, repos } = this.state;

        if(invalidUsername) {
            return (
                <div>
                    Invalid username, please try again! 
                </div>
            );
        }

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
                <Nav
                    repos={data.public_repos}
                    followers={data.followers}
                    following={data.following}
                />
                <div className="info">
                    <img src={data.avatar_url} width="230" height="230" alt="Github Avatar" />
                    <h3>{data.name}</h3>
                    <h4 className="login">{data.login}</h4>
                    <p>{data.bio}</p>
                    <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="profileBtn">View Github profile</a>
                </div>
                <Repos data={repos}/>
            </div>
        );
    }
}

export default Github;
