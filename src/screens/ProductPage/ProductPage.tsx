import { ReactNode, FC } from 'react';

type ProductPageProps = {
    children: ReactNode;
};

const ProductPage: FC<ProductPageProps> = ({ children }) => (
    <div>
        {children}
        <p>ProductPage</p>
    </div>
);

export default ProductPage;
