import React from 'react';
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {

    return (
        <div className='app__navbar'>
            <div className="app__navbar_wrapper">
                <div className="app__navbar_wrapper-search">
                    <input type="text" placeholder='Search...' />
                    <SearchIcon/>
                </div>
                <div className="app__navbar_wrapper-items">
                    <div className="app__navbar_wrapper-item">
                        <LanguageIcon/>
                        English
                    </div>
                    <div className="app__navbar_wrapper-item">
                        <DarkModeOutlinedIcon className='app__navbar_wrapper-item-icon'/>
                    </div>
                    <div className="app__navbar_wrapper-item">
                        <FullscreenIcon className='app__navbar_wrapper-item-icon'/>
                    </div>
                    <div className="app__navbar_wrapper-item">
                        <NotificationsNoneIcon className='app__navbar_wrapper-item-icon'/>
                        <div className="app__navbar_wrapper-item-counter">
                            1
                        </div>
                    </div>
                    <div className="app__navbar_wrapper-item">
                        <MessageOutlinedIcon className='app__navbar_wrapper-item-icon'/>
                        <div className="app__navbar_wrapper-item-counter">
                            2
                        </div>
                    </div>
                    <div className="app__navbar_wrapper-item">
                        <ListOutlinedIcon className='app__navbar_wrapper-item-icon'/>
                    </div>
                    <div className="app__navbar_wrapper-item">
                        <img 
                        src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg'
                        alt="avatar"
                        className='app__navbar_wrapper-item-avatar'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;