import { ReactNode, FC } from 'react';

type DashboardPageProps = {
    children: ReactNode;
};

const DashboardPage: FC<DashboardPageProps> = ({ children }) => (
    <div>
        {children}
        <p>DashboardPage</p>
    </div>
);

export default DashboardPage;
