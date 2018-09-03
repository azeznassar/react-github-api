import React from 'react';
import './Github.css';
import Loading from '../Loading/Loading';
import Repo from '../Repo/Repo';
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

        // TODO put these into fetchData() function
        fetch(`https://api.github.com/users/${currentUsername}`)
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
        fetch(`https://api.github.com/users/${currentUsername}/repos`)
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
                    <div>
                        <img src={data.avatar_url} width="230" height="230" alt="Github Avatar" style={{borderRadius: '50%'}}/>
                        <h3>{data.name}</h3>
                        <h4 className="login">{data.login}</h4>
                        <p>{data.bio}</p>
                        <p><a href={data.html_url}>View Github profile</a></p>
                    </div>
                    <Nav 
                        repos={data.public_repos}
                        followers={data.followers}
                        following={data.following}
                    />
                </div>
                <div>
                    <h3>Repos</h3>
                    {repos.map(repo => { return ( // TODO get description and make cards? make into component!
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
