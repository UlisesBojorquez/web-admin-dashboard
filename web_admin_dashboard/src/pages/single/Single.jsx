import React from 'react';
import "./single.scss";
import {  Chart, Navbar, Sidebar, Table } from '../../components';

const Single = () => {

    return (
        <div className='app__single'>
            <Sidebar/>
            <div className="app__single-container">
                <Navbar/>
                <div className="app__single-container-top">
                    <div className="app__single-container-top-left">
                        <div className="app__single-container-top-left-editButton">
                            Edit
                        </div>
                        <h1 className="app__single-container-title"> Information </h1>
                        <div className="app__single-container-top-left-item"> 
                            <img 
                            src='https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?cs=srgb&dl=pexels-vazhnik-7562313.jpg&fm=jpg' 
                            alt='' 
                            className='app__single-container-top-left-itemImg' />
                            <div className="app__single-container-top-left-itemDetails">
                                <h1 className="app__single-container-top-left-itemDetails-title">Mark Garcia</h1>
                                <div className="app__single-container-top-left-itemDetails-detail">
                                    <span className="app__single-container-top-left-itemDetails-itemKey">Email: </span>
                                    <span className="app__single-container-top-left-itemDetails-itemValue">markgarcia@gmail.com </span>
                                </div>
                                <div className="app__single-container-top-left-itemDetails-detail">
                                    <span className="app__single-container-top-left-itemDetails-itemKey">Phone: </span>
                                    <span className="app__single-container-top-left-itemDetails-itemValue">+1 232 3455 678 </span>
                                </div>
                                <div className="app__single-container-top-left-itemDetails-detail">
                                    <span className="app__single-container-top-left-itemDetails-itemKey">Address: </span>
                                    <span className="app__single-container-top-left-itemDetails-itemValue">Elton St. 234 Garden Yd. NewYork </span>
                                </div>
                                <div className="app__single-container-top-left-itemDetails-detail">
                                    <span className="app__single-container-top-left-itemDetails-itemKey">Country: </span>
                                    <span className="app__single-container-top-left-itemDetails-itemValue">USA </span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="app__single-container-top-right">
                        <Chart aspect={3 / 1} title="User Spendieng (last 6 months)"/>
                    </div>
                </div>
                <div className="app__single-container-bottom">
                    <h1 className="app__single-container-title"> Last Transactions </h1>
                    <Table/>
                </div>
            </div>
        </div>
    );
};

export default Single;