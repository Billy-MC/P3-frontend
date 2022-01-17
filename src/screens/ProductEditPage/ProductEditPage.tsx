import { Box } from '@mui/material';
import BackToProduct from './components/BackToProduct';
import styles from './ProductEditPage.module.scss';
import BasicDetails from './components/BasicDetails';
import PriceAndStocks from './components/PriceAndStocks';
import ProductEditPageButton from './components/ProductEditPageButton';

const ProductEditPage = () => (
    <>
        <BackToProduct />
        <Box className={styles['editproductcontent-title']} />
        <BasicDetails />
        <PriceAndStocks />
        <ProductEditPageButton />
    </>
);

export default ProductEditPage;
