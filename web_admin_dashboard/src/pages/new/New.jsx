import React, { useState } from 'react';
import "./new.scss";
import { Navbar, Sidebar } from '../../components';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { auth,db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";


const New = ({inputs, title}) => {
    const [file, setFile] = useState("");
    const [data,setData] = useState({});

    const handleAdd = async (e) =>{
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timeStamp: serverTimestamp()
            });

        } catch (error) {
            console.log(error)
        }
    };

    const handleInput = (e) =>{
        const id = e.target.id;
        const value = e.target.value;
        setData({...data, [id]:value})
    };

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
                        <form onSubmit={handleAdd} >
                            <div className="app__new-formInput">
                                <label htmlFor='file'> Image <DriveFolderUploadOutlinedIcon className='app__new-formInput-icon'/></label>
                                <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{display:"none"}}/>
                            </div>
                            {
                                inputs.map((input) =>(
                                    <div className="app__new-formInput" key={input.id}>
                                        <label> {input.label}</label>
                                        <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                                    </div>
                                ))
                            }
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;