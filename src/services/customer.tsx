import { AxiosRequestConfig } from 'axios';
import request from '../utils/request';

export const getAllCustomers = () => {
    const config: AxiosRequestConfig = {
        url: 'api/customers',
        method: 'GET',
    };
    return request(config).then((res) => res.data);
};

export const getCustomerByEmail = (email: string) => {
    const config: AxiosRequestConfig = {
        url: `/api/customers/${email}`,
        method: 'GET',
    };
    return request(config);
};
