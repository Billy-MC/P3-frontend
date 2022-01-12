import TabFilter from '../../../../components/TabFilter';
import ProductAll from '../ProductAll';
import ProductAvailable from '../ProductAvailable';
import ProductNoStock from '../ProductNoStock';
import ProductPublished from '../ProductPublished';
import ProductDraft from '../ProductDraft';

const ProductToggleBtn = () => {
    const PRODUCT_FILTER = [
        {
            name: 'All',
            children: <ProductAll />,
        },
        {
            name: 'Published',
            children: <ProductPublished />,
        },
        {
            name: 'Draft',
            children: <ProductDraft />,
        },
        {
            name: 'Available',
            children: <ProductAvailable />,
        },
        {
            name: 'Out of Stock',
            children: <ProductNoStock />,
        },
    ];

    return <TabFilter filter={PRODUCT_FILTER} />;
};

export default ProductToggleBtn;
