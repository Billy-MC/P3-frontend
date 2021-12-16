import { ReactNode, FC } from 'react';

type OrderPageProps = {
    children: ReactNode;
};

const OrderPage: FC<OrderPageProps> = ({ children }) => (
    <div>
        {children}
        <p>OrderPage</p>
    </div>
);

export default OrderPage;
