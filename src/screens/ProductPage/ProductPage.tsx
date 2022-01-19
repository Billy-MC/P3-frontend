import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Box, Toolbar, Typography } from '@mui/material';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import ProductPageSearchBar from './components/ProductPageSearchBar';
import ProductDataGrid from './components/ProductDataGrid';
import ProductToggleBtn from './components/ProductToggleBtn';
import styles from './ProductPage.module.scss';

const ProductPage = () => (
    <>
        <Box className={styles['productPage-box']}>
            <Toolbar className={styles['productPage-toolbar']}>
                <Typography className={styles['productPage-header']}>Products</Typography>
                <Link to="add" className={styles['productPage-btnSection']}>
                    <ButtonPrimary className={styles['productPage-addBtn']} type="submit">
                        <AddIcon className={styles['productPage-addIcon']} />
                        Add
                    </ButtonPrimary>
                </Link>
            </Toolbar>
        </Box>
        <Box className={styles['productPage-box_white']}>
            <ProductToggleBtn />
            <ProductPageSearchBar />
            <ProductDataGrid />
        </Box>
    </>
);

export default ProductPage;
