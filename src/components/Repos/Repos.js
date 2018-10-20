import React from 'react';
import Repo from '../Repo/Repo';
import './Repos.css';

const Repos = (props) => {
    return (
        <React.Fragment>
            <h2 className="reposTitle">Public repositories</h2>
            <div className="profileRepos">
                {props.data.map(repo => {
                    return (
                        <Repo
                            key={repo.id}
                            name={repo.name} // full_name for username/repo-name
                            stargazers={repo.stargazers_count}
                            desc={repo.description}
                            forks={repo.forks}
                            language={repo.language}
                        />
                    );
                })}           
            </div>
        </React.Fragment>
    );
};

export default Repos;
