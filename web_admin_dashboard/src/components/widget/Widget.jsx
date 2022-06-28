import React from 'react';
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {

    let data;

    //temporary
    const amount= 100;
    const diff = 20;

    switch (type) {
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link:"See all users",
                icon: (<PersonOutlineOutlinedIcon className='app__widget-right-icon' style={{color:"crimson", backgroundColor:"rgba(255,0,0,0.2)" }} />)
            }
            
            break;
        case "order":
            data={
                title: "ORDERS",
                isMoney: false,
                link:"View all orders",
                icon: (<ShoppingCartOutlinedIcon className='app__widget-right-icon' style={{color:"goldenrod", backgroundColor:"rgba(218,165,32,0.2)" }}/>)
            }
            
            break;
        case "earning":
            data={
                title: "EARNINGS",
                isMoney: true,
                link:"See net earnings",
                icon: (<MonetizationOnOutlinedIcon className='app__widget-right-icon' style={{color:"green", backgroundColor:"rgba(0,128,0,0.2)" }}/>)
            }
            
            break;
        case "balance":
            data={
                title: "BALANCE",
                isMoney: true,
                link:"See details",
                icon: (<AccountBalanceOutlinedIcon className='app__widget-right-icon' style={{color:"purple", backgroundColor:"rgba(128,0,128,0.2)" }}/>)
            }
            
            break;       
        default:
            break;
    }

    return (
        <div className='app__widget'>
            <div className="app__widget-left">
                <span className="app__widget-left-title">
                    {data.title}
                </span>
                <span className="app__widget-left-counter">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="app__widget-left-link">
                    {data.link}
                </span>
            </div>
            <div className="app__widget-right">
                <div className="app__widget-right-percentage positive">
                    <KeyboardArrowUpOutlinedIcon/>
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;