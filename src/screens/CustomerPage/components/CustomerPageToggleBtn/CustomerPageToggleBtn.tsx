import Container from '@mui/material/Container';
import TabFilter from '../../../../components/TabFilter/TabFilter';

const CustomerPageToggleBtn = () => {
    const FILTER_TITLES = [
        {
            name: 'All',
        },
        {
            name: 'Accepts Marketing',
        },
        {
            name: 'Prospect',
        },
        {
            name: 'Returning',
        },
    ];

    return (
        <Container>
            <TabFilter filter={FILTER_TITLES} />
        </Container>
    );
};

export default CustomerPageToggleBtn;
