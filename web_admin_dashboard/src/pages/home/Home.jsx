import React from 'react';
import "./home.scss";
import { Sidebar, Navbar, Widget, Featured, Chart } from '../../components';
const Home = () => {

    return (
        <div className='app__home'>
            <Sidebar/>
            <div className="app__home-container">
                <Navbar/>
                <div className="app__home_widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="app__home-charts">
                    <Featured/>
                    <Chart/>
                </div>
            </div>
        </div>
        
    );
};

export default Home;