import React from 'react';
import './Repo.css';

class Repo extends React.Component {
    render() {
        return (
            <div className="repo"> 
                <a href={`https://github.com/${this.props.name}`} target="_blank" rel="noopener noreferrer" >
                    <span className="repoTitle">{this.props.name}</span>
                </a>
                <p className="repoDesc">{this.props.desc}</p>

                <div className="repoInfo">
                    <p className="repoItem language"><span className="repoIcon" role="img" aria-label="Circle Emoji">🔵</span> {this.props.language}</p>

                    <a href={`https://github.com/${this.props.name}/stargazers`} target="_blank" rel="noopener noreferrer" >
                        <p className="repoItem link"><span className="repoIcon" role="img" aria-label="Star Emoji">⭐</span> {this.props.stargazers}</p>
                    </a>
                    <a href={`https://github.com/${this.props.name}/network`} target="_blank" rel="noopener noreferrer" >
                        <p className="repoItem link"><span className="repoIcon" role="img" aria-label="Fork Emoji">🍴</span> {this.props.forks}</p>
                    </a> 
                </div>
            </div>    
        );
    }
}
export default Repo;
