import LoadingSpinner from '../../components/LoadingSpinner';
import SalesBoard from './components/SalesBoard';

const DashboardPage = () => (
    <div>
        <LoadingSpinner />
        <SalesBoard monthlySales={200000} />
    </div>
);

export default DashboardPage;
