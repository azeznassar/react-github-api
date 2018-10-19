import React from 'react';
import './Repo.css';

class Repo extends React.Component {
    render() {
        return (
            <div className="repo"> 
                <a href={`https://github.com/${this.props.name}`} target="_blank" rel="noopener noreferrer" >
                    <h2>{this.props.name}</h2>
                </a>
                <p>{this.props.desc}</p>
                <a href={`https://github.com/${this.props.name}/stargazers`} target="_blank" rel="noopener noreferrer" >
                    <p><span role="img" aria-label="Star Emoji">⭐</span> {this.props.stargazers}</p> 
                </a>    
                <a href={`https://github.com/${this.props.name}/network`} target="_blank" rel="noopener noreferrer" >
                    <p><span role="img" aria-label="Fork Emoji">🍴</span> {this.props.forks}</p> 
                </a> 
            </div>    
        );
    }
}
export default Repo;
