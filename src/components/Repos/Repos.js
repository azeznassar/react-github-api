import React from 'react';
import Repo from '../Repo/Repo';

const Repos = (props) => {
    return (
        <div>
            <h3>Repos</h3>
            {props.data.map(repo => {
                return (
                    <div key={repo.id}>
                        <Repo name={repo.full_name} stargazers={repo.stargazers_count} />
                    </div>
                );
            })}
        </div>
    );
};

export default Repos;
