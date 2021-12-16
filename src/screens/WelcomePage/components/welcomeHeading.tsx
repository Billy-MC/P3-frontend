import Stack from '@mui/material/Button';
import * as react from 'react';

interface welcomeHeadingType {
    companyName: string;
}

const welcomeHeading: react.FC<welcomeHeadingType> = (props) => {
    const { companyName } = props;
    return (
        <div>
            <Stack>
                <div>logo1</div>
                <div>{companyName}</div>
            </Stack>
        </div>
    );
};
export default welcomeHeading;
