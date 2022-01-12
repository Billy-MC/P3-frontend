import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';

const store = configureStore({
    reducer: {
        customers: customerSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true,
});

export default store;
