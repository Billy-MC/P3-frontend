import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import ButtonPrimary from '../../../../components/Button';
import styles from '../../CustomerDetailPage.module.scss';
import ICustomer from '../../../../types/ICustomer';
import { useAppDispatch } from '../../../../hooks/redux';
import { deleteCustomer } from '../../../../store/slices/customerSlice';

interface IDetail {
    Email: string;
    Phone: string;
    Name: string;
    Address: string;
    Spent: number;
}
export interface DetailsProps {
    details: ICustomer;
}

const CustomerDetail: React.FC<DetailsProps> = (props: DetailsProps) => {
    const { details } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const detail = {
        Email: details.email,
        Name: `${details.firstName} ${details.lastName}`,
        Phone: details.phone,
        Address: `${details.address.street},${details.address.city}, ${details.address.state} ${details.address.postcode}`,
        Spent: details.spending,
    };

    const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        dispatch(deleteCustomer(details.email));
        navigate({ pathname: '/customers' });
    };

    return (
        <>
            <Box className={styles['customerdetail-details']}>
                <span className={styles['customerdetail-details-title']}>Basic Details</span>
                <Divider />
                <List>
                    {Object.keys(detail).map((key, i) => (
                        <div key={key[i]}>
                            <ListItem className={styles['customerdetail-details-itemtext']}>
                                <ListItemText
                                    primary={key}
                                    secondary={detail[key as keyof IDetail]}
                                />
                            </ListItem>
                            <Divider />
                        </div>
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
                    <ButtonPrimary
                        className={styles['customerdetail-details-delete-btn']}
                        onClick={deleteHandler}
                    >
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
