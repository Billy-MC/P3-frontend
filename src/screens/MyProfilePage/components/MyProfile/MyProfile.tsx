import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import ButtonPrimary from '../../../../components/Button';
import styles from '../../MyProfilePage.module.scss';
import DeleteConfirmation from '../../../../components/DeleteConfirmationModal';
import { IUser } from '../../../../types/IUser';
import { deleteMe, logOut } from '../../../../store/slices/userSlice';
import { useAppDispatch } from '../../../../hooks/redux';

export interface DetailsProps {
    user: IUser;
}

const MyProfile: React.FC<DetailsProps> = (props: DetailsProps) => {
    const [openPopup, setOpenPopup] = useState(false);
    const showModal = () => setOpenPopup(true);

    const { user } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logeOut = useCallback(() => {
        dispatch(logOut());
    }, [dispatch]);

    const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        dispatch(deleteMe(user.email));
        logeOut();
        navigate({ pathname: '/' });
    };

    const details = [
        { name: 'Email', value: user ? user.email : '' },
        { name: 'User Name', value: `${user ? user.firstName : ''} ${user ? user.lastName : ''}` },
        { name: 'Phone', value: user ? user.phone : '' || 'No provided' },
    ];

    return (
        <>
            <Box className={styles['userdetail-details']}>
                <span className={styles['userdetail-details-title']}>Basic Details</span>
                <Divider />
                <List className={styles['userdetail-details-section']}>
                    {details.map((detail) => (
                        <>
                            <ListItem
                                key={detail.name}
                                className={styles['userdetail-details-itemtext']}
                            >
                                <ListItemText primary={detail.name} secondary={detail.value} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
            </Box>
            <Box className={styles['userdetail-details']}>
                <span className={styles['userdetail-details-title']}>Data Management</span>
                <Divider />
                <Box className={styles['userdetail-details-delete']}>
                    <ButtonPrimary
                        className={styles['userdetail-details-delete-btn']}
                        onClick={showModal}
                    >
                        Delete Account
                    </ButtonPrimary>
                    <DeleteConfirmation
                        name={details[1].value || ''}
                        onClick={deleteHandler}
                        openPopup={openPopup}
                        setOpenPopup={setOpenPopup}
                    />
                    <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;Remove this account then the information can never
                        be recovered
                    </span>
                </Box>
            </Box>
        </>
    );
};

export default MyProfile;
