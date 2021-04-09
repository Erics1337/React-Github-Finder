import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


// To generate a component with react snippets type rce
const Users = ({ users, loading }) => {
    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {/* loop through users in state, for each one user variable represents entire user object which is passed in as a prop*/}
                {users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users