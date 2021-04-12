import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';


// Dont need a return if using an arrow function
export const Home = () => {
    return(
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )
    
}

export default Home;