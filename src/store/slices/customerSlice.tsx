/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { getAllCustomers } from '../../services/customer';
import type ICustomer from '../../types/ICustomer';
import asyncStatus from '../../types/asyncStatus';

export interface CustomersState {
    customers: ICustomer[];
    status: asyncStatus;
    error: null | string | undefined;
}

const initialState: CustomersState = {
    customers: [],
    status: asyncStatus.idle,
    error: null,
};

export const fetchAllCustomers = createAsyncThunk('customer/fetchAllCustomers', async () => {
    const data = await getAllCustomers();
    return data as ICustomer[];
});

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCustomers.pending, (state: CustomersState) => {
                state.status = asyncStatus.loading;
            })
            .addCase(fetchAllCustomers.fulfilled, (state: CustomersState, action) => {
                state.status = asyncStatus.succeeded;
                state.customers = action.payload;
            })
            .addCase(fetchAllCustomers.rejected, (state: CustomersState, action) => {
                state.status = asyncStatus.failed;
                state.error = action.error.message;
            });
    },
});

export const selectCustomers = (state: RootState) => state.customers.customers;
export const selectCustomerStatus = (state: RootState) => state.customers.status;

export default customerSlice.reducer;
