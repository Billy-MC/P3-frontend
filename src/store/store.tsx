import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';

const store = configureStore({
    reducer: {
        customers: customerSlice,
    },
});

export default store;
