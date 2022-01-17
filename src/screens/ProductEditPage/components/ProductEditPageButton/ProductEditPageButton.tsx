import { Box } from '@mui/material';
import ButtonPrimary from '../../../../components/Button/ButtonPrimary';
import style from './ProductEditPageButton.module.scss';

const ProductEditPageButton = () => (
    <Box className={style.form}>
        <Box className={style.editproductpageform}>
            <Box className={style['eeditproductpageform-btnsection']}>
                <ButtonPrimary
                    className={style['editproductpageform-btnsection_update']}
                    type="submit"
                >
                    Update
                </ButtonPrimary>
                <ButtonPrimary className={style['editproductpageform-btnsection_cancel']}>
                    Cancel
                </ButtonPrimary>
                <ButtonPrimary
                    className={style['editproductpageform-btnsection_delete']}
                    type="submit"
                >
                    Delete Product
                </ButtonPrimary>
            </Box>
        </Box>
    </Box>
);

export default ProductEditPageButton;
