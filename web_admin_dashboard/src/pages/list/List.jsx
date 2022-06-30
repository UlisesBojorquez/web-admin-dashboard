import React from 'react';
import "./list.scss";
import { Datatable, Navbar, Sidebar } from '../../components';

const List = () => {

    return (
        <div className='app__list'>
            <Sidebar/>
            <div className="app__list-container">
                <Navbar/>
                <Datatable/> 
            </div>
        </div>
    );
};

export default List;