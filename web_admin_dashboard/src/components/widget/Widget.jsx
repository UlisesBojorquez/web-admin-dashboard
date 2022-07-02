import React, { useEffect, useState } from 'react';
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';

const Widget = ({type}) => {
    const [amount, setAmount] = useState(null);
    const [diff, setDiff] = useState(null);
    let data;

    switch (type) {
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link:"See all users",
                query:"users",
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
        case "product":
            data={
                title: "PRODUCTS",
                query: "products",
                link:"See details",
                icon: (<AccountBalanceOutlinedIcon className='app__widget-right-icon' style={{color:"purple", backgroundColor:"rgba(128,0,128,0.2)" }}/>)
            }
            
            break;       
        default:
            break;
    };

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
            const lastMonthQuery = query(
                collection(db, data.query),
                where("timeStamp", "<=", today),
                where("timeStamp", ">", lastMonth)
            );
            const prevMonthQuery = query(
                collection(db, data.query),
                where("timeStamp", "<=", lastMonth),
                where("timeStamp", ">", prevMonth)
            );
        
            const lastMonthData = await getDocs(lastMonthQuery);
            const prevMonthData = await getDocs(prevMonthQuery);
        
            setAmount(lastMonthData.docs.length);
            setDiff(
                ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
                  100
              );
        };
        if(data.query) fetchData();
      }, []);

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
                <div className={`app__widget-right-percentage ${diff < 0 ? "negative" : "positive"}`}>
                    {diff < 0 ? <KeyboardArrowDownOutlined/> : <KeyboardArrowUpOutlinedIcon/>}
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;