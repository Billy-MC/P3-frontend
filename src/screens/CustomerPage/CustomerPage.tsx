import { ReactNode, FC } from 'react';

type CustomerPageProps = {
    children: ReactNode;
};

const CustomerPage: FC<CustomerPageProps> = ({ children }) => (
    <div>
        {children}
        <p>CustomerPage</p>
    </div>
);

export default CustomerPage;
