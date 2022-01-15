import * as React from 'react';
import styles from './statusBar.module.scss';

export type TStatus =
    | 'PENDING'
    | 'COMPLETE'
    | 'CANCELED'
    | 'REJECTED'
    | 'IN STOCK'
    | 'LIMITED'
    | 'OUT OF STOCK';

const colorsMatch = {
    PENDING: 'rgb(33, 150, 243)',
    COMPLETE: 'rgb(20, 184, 166)',
    CANCELED: 'rgb(255, 176, 32)',
    REJECTED: 'rgb(209, 67, 67)',
    'IN STOCK': 'rgb(20, 184, 166)',
    LIMITED: 'rgb(255, 176, 32)',
    'OUT OF STOCK': 'rgb(209, 67, 67)',
};

interface IStatusBar {
    status: TStatus;
}

const StatusBar: React.FC<IStatusBar> = (props) => {
    const { status } = props;
    const barColor = { backgroundColor: colorsMatch[status] };
    return (
        <div className={styles.barStyle} style={barColor}>
            <p className={styles.text}>{status}</p>
        </div>
    );
};

export default StatusBar;
