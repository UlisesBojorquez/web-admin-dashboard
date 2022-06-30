import React, { useState } from 'react';
import "./new.scss";
import { Navbar, Sidebar } from '../../components';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({inputs, title}) => {
    const [file, setFile] = useState("");
    console.log(file)

    return (
        <div className='app__new'>
            <Sidebar/>
            <div className="app__new-container">
                <Navbar/>
                <div className="app__new-container-top">
                    <h1>
                        {title}
                    </h1>
                </div>
                <div className="app__new-container-bottom">
                    <div className="app__new-container-bottom-left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" } alt="" />
                    </div>
                    <div className="app__new-container-bottom-right">
                        <form >
                            <div className="app__new-formInput">
                                <label htmlFor='file'> Image <DriveFolderUploadOutlinedIcon className='app__new-formInput-icon'/></label>
                                <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{display:"none"}}/>
                            </div>
                            {
                                inputs.map((input) =>(
                                    <div className="app__new-formInput" key={input.id}>
                                        <label> {input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} />
                                    </div>
                                ))
                            }
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;