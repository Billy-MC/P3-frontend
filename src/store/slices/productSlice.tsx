import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../interfaces/redux';
import {
    getAllProducts,
    getProductBySku,
    createProduct,
    updateProductBySku,
    deleteProductBySku,
} from '../../services/product';
import IProduct from '../../types/IProduct';
import IFilter from '../../types/IFilter';
import asyncStatus from '../../types/asyncStatus';

export interface ProductsState {
    products: IProduct[];
    filters: IFilter[];
    status: asyncStatus;
    error: null | string | undefined;
    selectedProduct?: IProduct;
}

const selectedProductInitialState = {
    productName: '',
    category: '',
    description: '',
    price: '',
    quantity: '',
};

const initialState: ProductsState = {
    products: [],
    filters: [],
    status: asyncStatus.idle,
    error: null,
    selectedProduct: selectedProductInitialState as IProduct,
};

export const fetchAllProducts = createAsyncThunk('product/fetchAllProducts', async () => {
    const data = await getAllProducts();
    return data as IProduct[];
});

export const fetchProductBySku = createAsyncThunk(
    'product/fetchProductBySku',
    async (sku: string | undefined) => {
        const response = await getProductBySku(sku as string);
        return response as IProduct;
    },
);

export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (body: Partial<IProduct>, { rejectWithValue }) => {
        const { sku, ...fields } = body;
        try {
            const response = await createProduct(fields as IProduct);
            return response.fields as IProduct;
        } catch (e) {
            return rejectWithValue(e as Error);
        }
    },
);

export const updateProduct = createAsyncThunk<IProduct, { sku: string } & Partial<IProduct>>(
    'product/updateProduct',
    async (data) => {
        const { sku, ...fields } = data;
        const response = await updateProductBySku(sku as string, fields as IProduct);
        return response.fields as IProduct;
    },
);

export const removeProduct = createAsyncThunk('product/removeProduct', async (sku: string) => {
    await deleteProductBySku(sku);
    return sku;
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state: ProductsState) => {
                state.status = asyncStatus.loading;
            })
            .addCase(fetchAllProducts.fulfilled, (state: ProductsState, action) => {
                state.status = asyncStatus.succeeded;
                state.products = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state: ProductsState, action) => {
                state.status = asyncStatus.failed;
                state.error = action.error.message;
            });
        builder
            .addCase(fetchProductBySku.pending, (state: ProductsState) => {
                state.status = asyncStatus.loading;
            })
            .addCase(fetchProductBySku.fulfilled, (state: ProductsState, action) => {
                state.status = asyncStatus.succeeded;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductBySku.rejected, (state: ProductsState, action) => {
                state.status = asyncStatus.failed;
                state.error = action.error.message;
            });
        builder
            .addCase(addProduct.pending, (state: ProductsState) => {
                state.status = asyncStatus.loading;
            })
            .addCase(addProduct.fulfilled, (state: ProductsState, action) => {
                state.status = asyncStatus.succeeded;
            })
            .addCase(addProduct.rejected, (state: ProductsState, action) => {
                state.status = asyncStatus.failed;
                state.error = action.error.message;
            });
        builder
            .addCase(updateProduct.pending, (state: ProductsState) => {
                state.status = asyncStatus.loading;
            })
            .addCase(updateProduct.fulfilled, (state: ProductsState, action) => {
                state.status = asyncStatus.succeeded;
                const index = state.products.findIndex(
                    (product: IProduct) => product.sku === action.payload.sku,
                );
                state.products[index] = {
                    ...state.products[index],
                    ...action.payload,
                };
            })
            .addCase(updateProduct.rejected, (state: ProductsState, action) => {
                state.status = asyncStatus.failed;
                state.error = action.error.message;
            });
        builder
            .addCase(removeProduct.pending, (state: ProductsState) => {
                state.status = asyncStatus.loading;
            })
            .addCase(removeProduct.fulfilled, (state: ProductsState, { payload }) => {
                state.status = asyncStatus.succeeded;
                state.products = state.products.filter((product) => product.sku !== payload);
            })
            .addCase(removeProduct.rejected, (state: ProductsState, action) => {
                state.status = asyncStatus.failed;
                state.error = action.error.message;
            });
    },
});

export const selectProducts = (state: RootState) => state.products.products;
export const selectProduct = (state: RootState) => state.products.selectedProduct;
export const selectProductStatus = (state: RootState) => state.products.status;

export default productSlice.reducer;
