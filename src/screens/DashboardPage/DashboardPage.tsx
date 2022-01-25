import Chart from './components/Chart';
import Info from './components/Info';
import styles from './DashboardPage.module.scss';

const DashboardPage = () => (
    <div className={styles.dashboard}>
        <Info />
        <Chart />
    </div>
);

export default DashboardPage;
