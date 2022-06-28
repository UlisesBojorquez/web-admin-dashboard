import React from 'react';
import "./home.scss";
import { Sidebar, Navbar } from '../../components';
const Home = () => {

    return (
        <div className='app__home'>
            <Sidebar/>
            <div className="app__home-container">
                <Navbar/>
                home container
            </div>
        </div>
        
    );
};

export default Home;