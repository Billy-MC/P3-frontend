import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../models/counter';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;
