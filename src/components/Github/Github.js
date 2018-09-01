import React from 'react';
import Loading from '../Loading/Loading';
import Repo from './Repo';

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
        fetch(`https://api.github.com/users/${this.props.username}`)
            .then(response => {
                if(!response.ok) {
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
        fetch(`https://api.github.com/users/${this.props.username}/repos`)
            .then(resp => {
                if(!resp.ok) {
                    throw Error('Network reuqest failed');
                }
                return resp;
            })
            .then(data => data.json())
            .then(data => {
                this.setState({
                    repos: data 
                    //dataLoaded: true
                });
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
                <div>
                    <h1>{data.name}</h1>
                    <p><a href={data.html_url}>View Github profile</a></p>
                    <img src={data.avatar_url} width="100" height="100" alt="Github Avatar" style={{borderRadius: '50%'}}/>
                    <ul>
                        <li>Repos: {data.public_repos}</li>
                        <li>Gists: {data.public_gists}</li>
                        <li>Followers: {data.followers}</li>
                        <li>Following: {data.following}</li>
                    </ul>
                </div>
                <div>
                    <h3>Repos</h3>
                    {repos.map(repo => { return (
                        <div key={repo.id}>
                            <Repo name={repo.full_name} stargazers={repo.stargazers_count}/>
                        </div>
                    ); })}
                </div>
            </div>
        );
    }
}

export default Github;


// `https://api.github.com//user/${this.props.username}/followers` 
// `https://api.github.com//user/${this.props.username}/following`
