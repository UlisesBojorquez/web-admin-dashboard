import React, { useEffect, useState } from 'react';
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../datatablesource';
import {Link} from "react-router-dom";
import { collection, deleteDoc, doc, onSnapshot  } from "firebase/firestore";
import { db } from '../../firebase';

const Datatable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // const fetchData = async () =>{
        //     let list = [];
        //     try {
        //         const querySnapshot = await getDocs(collection(db, "users"));
        //         querySnapshot.forEach((doc) => {
        //             list.push({id:doc.id, ...doc.data()});
        //         });
        //         setData(list);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };
        // fetchData();

        //LISTEN REALTIME DATA
        const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
                list.push({id:doc.id, ...doc.data()});
            })
            setData(list);
          },(error)=>{
            console.log(error);
          });

        return () => {
            unsub();
        };
    }, [])
    
    
    const handleDelete = async (id) =>{
        try {
            await deleteDoc(doc(db, "users", id));
            setData(data.filter(item => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    const actionColumn = [{
        field:"action",
        headerName:"Action",
        width: 200,
        renderCell:(params)=>{
            return(
                <div className="app__datatable-cellAction">
                    <Link to="/users/test" style={{textDecoration:"none"}}>
                        <div className="app__datatable-viewButton">View</div>
                    </Link>
                    <div className="app__datatable-deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
    }]

    return (
        <div className='app__datatable'>
            <div className="app__datatable-title">
                Add New User
                <Link to="/users/new" className="app__datatable-link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className='app__datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />

        </div>
    );
};

export default Datatable;