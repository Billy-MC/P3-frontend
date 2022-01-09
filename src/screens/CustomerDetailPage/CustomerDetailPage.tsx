import { Container } from '@mui/material';
import EditPageTemplate from '../../components/EditPageTemplate';
import TabFilter from '../../components/TabFilter';
import CustomerDetail from './components/CustomerDetail';
import CustomerDetailHeading from './components/CustomerDetailHeading';
import CustomerInvoice from './components/CustomerInvoice';

const CustomerDetailPage = () => {
    const FILTER_TITLES = [
        {
            name: 'Details',
            filterEventHandler: () => {},
            children: <CustomerDetail />,
        },
        {
            name: 'Invoices',
            filterEventHandler: () => {},
            children: <CustomerInvoice />,
        },
    ];

    return (
        <EditPageTemplate>
            <Container>
                <CustomerDetailHeading />
                <TabFilter filter={FILTER_TITLES} />
            </Container>
        </EditPageTemplate>
    );
};

export default CustomerDetailPage;
