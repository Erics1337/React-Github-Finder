import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

export const Repos = ({ repos }) => {
    //  RepoItem needs a key because it is a list
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired
};

export default Repos;
