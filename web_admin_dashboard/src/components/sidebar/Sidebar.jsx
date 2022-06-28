import React from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {

    return (
        <div className='app__sidebar'>
            <div className="app__sidebar-top">
                <span className="app__sidebar-top-logo">UlisesAdmin</span>
            </div>
            <hr />
            <div className="app__sidebar-center">
                <ul>
                    <p className="app__sidebar-center_title">MAIN</p>
                    <li>
                        <DashboardIcon className='app__sidebar-center-icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className="app__sidebar-center_title">LISTS</p>
                    <li>
                        <PersonIcon className='app__sidebar-center-icon'/>
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreIcon className='app__sidebar-center-icon'/>
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardIcon className='app__sidebar-center-icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='app__sidebar-center-icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className="app__sidebar-center_title">USEFUL</p>
                    <li>
                        <AssessmentIcon className='app__sidebar-center-icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className='app__sidebar-center-icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className="app__sidebar-center_title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className='app__sidebar-center-icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className='app__sidebar-center-icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='app__sidebar-center-icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="app__sidebar-center_title">USER</p>
                    <li>
                        <AccountCircleIcon className='app__sidebar-center-icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='app__sidebar-center-icon'/>
                        <span>Logout</span>
                    </li>
                </ul>

            </div>
            <div className="app__sidebar-bottom">
                <div className="app__sidebar-bottom_colorOption"></div>
                <div className="app__sidebar-bottom_colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;