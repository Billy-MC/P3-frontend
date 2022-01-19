import { AxiosRequestConfig } from 'axios';
import request from '../../utils/request';
import { IUser } from '../../types/IUser';

export const signup = (body: IUser) => {
    const config: AxiosRequestConfig = {
        url: 'users/signup',
        method: 'POST',
        data: body,
    };
    return request(config)
        .then((response) => {
            if (response.status === 200) {
                return response.data;
            }
            return response;
        })
        .catch((error) => error);
};

export const signin = (body: IUser) => {
    const config: AxiosRequestConfig = {
        url: 'users/login',
        method: 'POST',
        data: body,
    };
    return request(config)
        .then((response) => {
            if (response.status === 200) {
                localStorage.setItem('AUTH_TOKEN', response.headers.authorization);
                return response.data;
            }
            return response;
        })
        .catch((error) => error);
};

export const logout = () => {
    localStorage.removeItem('AUTH_TOKEN');
};

export const getAllUsers = () => {
    const config: AxiosRequestConfig = {
        url: 'users',
        method: 'GET',
    };
    return request(config).then((res) => res.data);
};

export const getUserByEmail = (email: string | undefined) => {
    const config: AxiosRequestConfig = {
        url: `users/${email}`,
        method: 'GET',
    };
    return request(config)
        .then((res) => res.data)
        .catch((error) => error);
};

export const updateUserByEmail = (email: string, body: IUser) => {
    const config: AxiosRequestConfig = {
        url: `users/${email}`,
        method: 'PUT',
        data: body,
    };
    return request(config)
        .then((res) => res.data)
        .catch((error) => error);
};

export const deleteUserByEmail = (email: string) => {
    const config: AxiosRequestConfig = {
        url: `users/${email}`,
        method: 'DELETE',
    };
    return request(config)
        .then((res) => res.data)
        .catch((error) => error);
};
