import axios, { AxiosRequestConfig } from "axios";

const baseURL = process.env.NODE_ENV === "development" ? "" : "";
const withCredentials = true;
const timeout = 30000;

/**
 * Requests a path, returning a promise.
 *
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default function request(options: AxiosRequestConfig) {
    const axiosInstance = axios.create({
        baseURL,
        withCredentials,
        timeout,
    });

    return axiosInstance(options)
        .then((response) => response)
        .catch((error) => error);
}
