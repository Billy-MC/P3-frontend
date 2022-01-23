import { AxiosRequestConfig } from 'axios';
import request from '../utils/request';

export const getAllInvoices = () => {
    const config: AxiosRequestConfig = {
        url: 'invoices',
        method: 'GET',
    };
    return request(config).then((res) => res.data);
};

export const getInvoiceById = (id: string | undefined) => {
    const config: AxiosRequestConfig = {
        url: `invoices/${id}`,
        method: 'GET',
    };
    return request(config)
        .then((res) => res.data)
        .catch((error) => error);
};
