import React from 'react';
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Featured = () => {

    return (
        <div className='app__featured'>
            <div className="app__featured-top">
                <h1 className="app__featured-top-title">Total Revenue</h1>
                <MoreVertIcon fontSize='small'/>
            </div>
            <div className="app__featured-bottom">
                <div className="app__featured-bottom-chart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
                </div>
                <div className="app__featured-bottom-title">
                    Total sales made today
                </div>
                <div className="app__featured-bottom-amount">
                    $420
                </div>
                <div className="app__featured-bottom-desc">
                    Previous transactions precessing. Last payments may not be included.
                </div>
                <div className="app__featured-bottom-summary">
                    <div className='app__featured-bottom-summary-item'>
                        <div className="app__featured-bottom-summary-itemTitle">
                            Target
                        </div>
                        <div className="app__featured-bottom-summary-itemResult negative">
                            <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                            <div className="app__featured-bottom-summary-itemResult-amount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className='app__featured-bottom-summary-item'>
                        <div className="app__featured-bottom-summary-itemTitle">
                            Last Week
                        </div>
                        <div className="app__featured-bottom-summary-itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="app__featured-bottom-summary-itemResult-amount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className='app__featured-bottom-summary-item'>
                        <div className="app__featured-bottom-summary-itemTitle">
                            Last Month
                        </div>
                        <div className="app__featured-bottom-summary-itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="app__featured-bottom-summary-itemResult-amount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;