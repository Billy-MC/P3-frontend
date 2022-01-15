import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { GridColDef, GridRenderCellParams, GridActionsCellItem } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import DataGridTable from '../../../../components/DataGridTable';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchAllProducts, selectProducts } from '../../../../store/slices/productSlice';
import ICustomer from '../../../../types/ICustomer';
import { capitalizor, quantityToStatus } from '../../../../utils/dataProcessor';
import {
    PrimaryKeyLayout,
    MoneyTag,
} from '../../../../components/DataGridTable/components/DataGridCells/DataGridCells';
import StatusBar from '../../../../components/StatusBar';

const columnDef: GridColDef[] = [
    {
        field: 'productName',
        headerName: 'NAME',
        flex: 4,
        valueGetter: (params) => params.row.productName,
        renderCell: (params: GridRenderCellParams) => (
            <PrimaryKeyLayout
                primary={`${capitalizor(params.row.productName)}`}
                secondary={`in ${params.row.category}`}
                linkAddress={`${params.row.sku}`}
            />
        ),
    },
    {
        field: 'price',
        headerName: 'PRICE',
        type: 'number',
        renderCell: (params) => <MoneyTag amount={params.row.price} />,
        flex: 2,
    },
    { field: 'quantity', headerName: 'quantity', type: 'number', flex: 1 },
    {
        field: 'status',
        headerName: 'STATUS',
        valueGetter: (params) => quantityToStatus(params.row.quantity),
        renderCell: (params: GridRenderCellParams) => (
            <StatusBar status={quantityToStatus(params.row.quantity)} />
        ),
        flex: 1,
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: 'ACTIONS',
        flex: 1,
        renderCell: (params) => (
            <Box>
                <Link to={`${params.row.sku}`}>
                    <GridActionsCellItem
                        style={{ padding: '15px' }}
                        icon={<VisibilityIcon />}
                        label="view"
                    />
                </Link>
                <Link to={`${params.row.sku}/edit`}>
                    <GridActionsCellItem
                        style={{ padding: '15px' }}
                        icon={<EditIcon />}
                        label="edit"
                    />
                </Link>
            </Box>
        ),
    },
];
const ProductDataGrid = () => {
    const customers: ICustomer[] = useAppSelector(selectProducts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    return (
        <DataGridTable
            rows={customers}
            columns={columnDef.map((row) => ({
                headerClassName: 'super-app-theme--header',
                ...row,
            }))}
        />
    );
};

export default ProductDataGrid;
