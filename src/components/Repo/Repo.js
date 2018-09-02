import React from 'react';

class Repo extends React.Component {
    render() { // TODO remove inline styles
        return (
            <div> 
                <a href={`https://github.com/${this.props.name}`} style={{textDecoration: 'none'}} >
                    <h2>{this.props.name}</h2>
                </a>
                <a href={`https://github.com/${this.props.name}/stargazers`} style={{textDecoration: 'none'}} >
                    <p><span role="img" aria-label="Star Emoji">⭐</span> {this.props.stargazers}</p> 
                </a>    
            </div>    
        );
    }
}
export default Repo;
