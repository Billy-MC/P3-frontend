import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Stack from '@mui/material/Stack';

import BackPage from '../../../../components/BackPage/BackPage';
import styles from '../../MyProfilePage.module.scss';

export interface HeaderProps {
    fullName: string;
    initialName: string;
}

const MyProfileHeading: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { fullName, initialName } = props;

    return (
        <>
            <BackPage to="/dashboard" title="Back" />
            <Box className={styles['userdetail-heading']}>
                <Stack direction="row" spacing={2}>
                    <Avatar
                        className={styles['userdetail-heading-avatar']}
                        sx={{ bgcolor: deepOrange[500] }}
                    >
                        <h2> {initialName}</h2>
                    </Avatar>
                    <Typography
                        className={styles['userdetail-heading-username']}
                        noWrap
                        component="div"
                    >
                        {fullName}
                    </Typography>
                </Stack>
            </Box>
        </>
    );
};

export default MyProfileHeading;
