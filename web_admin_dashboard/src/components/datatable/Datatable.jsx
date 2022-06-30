import React from 'react';
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';

const Datatable = () => {
    const actionColumn = [{
        field:"action",
        headerName:"Action",
        width: 200,
        renderCell:()=>{
            return(
                <div className="app__datatable-cellAction">
                    <div className="app__detatable-viewButton">View</div>
                    <div className="app__detatable-deleteButton">Delete</div>
                </div>
            )
        }
    }]

    return (
        <div className='app__datatable'>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />

        </div>
    );
};

export default Datatable;