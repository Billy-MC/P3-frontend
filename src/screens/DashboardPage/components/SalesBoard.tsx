import { FC } from 'react';
import styles from './SalesBoard.module.scss';

interface SalesBoardProps {
    monthlySales: number;
}

const DashboardPage: FC<SalesBoardProps> = ({ monthlySales }) => (
    <div className={styles.salesboard}>
        <div className={styles.salesboard__img} />
        <div className={styles.salesboard__container}>
            <p className={styles.salesboard__title}>Monthly Sales</p>
            <p className={styles.salesboard__amount}>${monthlySales.toLocaleString()}</p>
        </div>
    </div>
);

export default DashboardPage;
