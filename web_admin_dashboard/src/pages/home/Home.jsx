import React from 'react';
import "./home.scss";
import { Sidebar } from '../../components';
const Home = () => {

    return (
        <div className='app__home'>
            <Sidebar/>
            <div className="app__home-container">container</div>
        </div>
        
    );
};

export default Home;