import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import gridColumnGenerator from '../../utils/gridColumnGenerator';

export interface IRow {
    [key: string]: any;
}
interface IDataGridTableProps {
    rows: IRow[];
}

const DataGridTable: React.FC<IDataGridTableProps> = (props) => {
    const { rows } = props;
    const columns: GridColDef[] = gridColumnGenerator(rows);
    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={rows}
                getRowId={(row) => row._id}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </div>
    );
};

export default DataGridTable;
