import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';
import productSlice from './slices/productSlice';

const store = configureStore({
    reducer: {
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
