import { GridColDef } from '@mui/x-data-grid';
import camelToHeadingCase from './camelToHeadingCase';

const dataColumnGenerator = (row: { [key: string]: any }[]): GridColDef[] => {
    //  clone firt firt row
    const noNullRow = { ...row[0] };
    const keys = Object.keys(noNullRow);
    const values = Object.values(noNullRow);
    const missing: number[] = [];
    values.forEach((value, i) => {
        if (value === null) missing.push(i);
    });

    // if it has null value, try find a row without null, and fill the gap in
    for (let j = 0; j < row.length; j += 1) {
        if (missing.length === 0) {
            break;
        }
        missing.forEach((m: number, i) => {
            if (row[j][keys[m]] !== null) {
                noNullRow[keys[m]] = row[j][keys[m]];
                missing.splice(i, 1);
            }
        });
    }
    // map complete row  to GridColDef
    const outputColumn: GridColDef[] = keys.map((key) => {
        const field: string = key;
        let flex: number = 10;
        switch (typeof noNullRow[key]) {
            case 'string':
                flex += noNullRow[key].length;
                break;
            case 'number':
                flex += noNullRow[key].toString().length;
                break;
            default:
                flex = 10;
                break;
        }

        const headerName: string = camelToHeadingCase(key);
        return {
            field,
            flex,
            headerName,
        };
    });

    return outputColumn;
};

export default dataColumnGenerator;
