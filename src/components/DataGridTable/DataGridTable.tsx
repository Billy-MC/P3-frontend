import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { useAppSelector } from '../../hooks/redux';
import { selectSearchFilter } from '../../store/slices/customerSlice';

const StyledDataGrid = styled(DataGrid)`
    &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
    &.MuiDataGrid-root .MuiDataGrid-cell:focus {
        outline: none;
    }
`;
export interface IRow {
    [key: string]: any;
}
interface IDataGridTableProps {
    rows: IRow[];
    columns: GridColDef[];
}

const DataGridTable: React.FC<IDataGridTableProps> = (props) => {
    const { rows, columns } = props;
    const filterModel = useAppSelector(selectSearchFilter);

    return (
        <Box
            sx={{
                width: 1,
                '& .super-app-theme--header': {
                    backgroundColor: '#F3F4F6',
                },
            }}
        >
            <StyledDataGrid
                autoHeight
                rows={rows}
                getRowId={(row) => row._id}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10, 25, 50, 100]}
                rowHeight={80}
                filterModel={filterModel}
                disableColumnSelector
                disableDensitySelector
                disableSelectionOnClick
                disableColumnMenu
            />
        </Box>
    );
};

export default DataGridTable;
