import { Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import ButtonPrimary from '../../../../components/Button';
import styles from '../../CustomerDetailPage.module.scss';

const CustomerDetail = () => {
    const details = [
        {
            name: 'Email',
            value: 'miron.vitold@devias.io',
        },
        {
            name: 'Phone',
            value: '+55 748 327 439',
        },
    ];

    return (
        <>
            <Box className={styles['customerdetail-details']}>
                <span className={styles['customerdetail-details-title']}>Basic Details</span>
                <Divider />
                <List>
                    {details.map((detail) => (
                        <>
                            <ListItem
                                key={detail.name}
                                className={styles['customerdetail-details-itemtext']}
                            >
                                <ListItemText primary={detail.name} secondary={detail.value} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
                <Box className={styles['customerdetail-details-reset']}>
                    <ButtonPrimary className={styles['customerdetail-details-reset-btn']}>
                        Reset & Send Password
                    </ButtonPrimary>
                </Box>
            </Box>
            <Box className={styles['customerdetail-details']}>
                <span className={styles['customerdetail-details-title']}>Data Management</span>
                <Divider />
                <Box className={styles['customerdetail-details-delete']}>
                    <ButtonPrimary className={styles['customerdetail-details-delete-btn']}>
                        Delete Account
                    </ButtonPrimary>
                    <span>
                        Remove this customer&#32;s chart if he requested that, if not please be
                        aware that what has been deleted can never brought back
                    </span>
                </Box>
            </Box>
        </>
    );
};

export default CustomerDetail;
