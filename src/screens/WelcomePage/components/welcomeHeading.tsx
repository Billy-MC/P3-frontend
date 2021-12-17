import * as react from 'react';
import { Stack } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

interface IHeading {
    companyName: string;
}

const WelcomeHeading: react.FC<IHeading> = (props) => {
    const { companyName } = props;
    return (
        <div>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                <div>logo</div>
                <div>{companyName}</div>
            </Stack>
        </div>
    );
};
export default WelcomeHeading;
