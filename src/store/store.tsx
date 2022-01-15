import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';
import productSlice from './slices/productSlice';
import filterSlice from './slices/filterSlice';

const store = configureStore({
    reducer: {
        filterModels: filterSlice,
        customers: customerSlice,
        products: productSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true,
});

export default store;
