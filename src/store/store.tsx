import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';

export const store = configureStore({
    reducer: {
        customers: customerSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
