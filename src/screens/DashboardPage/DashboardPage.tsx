import SalesBoard from './components/SalesBoard';
import Chart from './components/Chart';
import styles from './DashboardPage.module.scss';

const DashboardPage = () => (
    <div className={styles.dashboard}>
        <SalesBoard monthlySales={200000} />
        <Chart />
    </div>
);

export default DashboardPage;
