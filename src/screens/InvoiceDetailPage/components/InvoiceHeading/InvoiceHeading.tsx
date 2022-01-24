import { Link } from 'react-router-dom';
import { Box, Avatar } from '@mui/material';
import ButtonPrimary from '../../../../components/Button/ButtonPrimary';
import styles from '../../InvoiceDetailPage.module.scss';

export interface HeaderProps {
    id: string;
    name: string;
    email: string;
}

const InvoiceDetailHeading: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { id, name, email } = props;
    const nameInChar = (str: string | undefined): string =>
        str ? `${str.split(' ')[0][0]}${str.split(' ')[1][0]}` : '';

    return (
        <Box className={styles.invoiceDetail_heading}>
            <div className={styles.invoiceDetail_heading_title}>
                <Avatar className={styles.invoiceDetail_heading_title_avatar}>
                    {nameInChar(name)}
                </Avatar>
                <div>
                    <h2 className={styles.invoiceDetail_heading_title_primary}>{id}</h2>
                    <Link to={`/customers/${email}`}>
                        <div className={styles.invoiceDetail_heading_title_secondary}>
                            <p>{name}</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.invoiceDetail_heading_buttons}>
                <ButtonPrimary className={styles.invoiceDetail_heading_buttons_btnLeft}>
                    <p>Preview</p>
                </ButtonPrimary>
                <ButtonPrimary className={styles.invoiceDetail_heading_buttons_btnRight}>
                    <p>Send To</p>
                </ButtonPrimary>
            </div>
        </Box>
    );
};

export default InvoiceDetailHeading;
