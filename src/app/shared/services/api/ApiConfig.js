
import axios from "axios"


const baseURL = 'http://localhost:8080/api';

export const Api = () => {
  return axios.create({
    baseURL: baseURL
  });
};

/*
https://www.youtube.com/watch?v=v8pYy4cIeSQ


import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { updateAccessToken } from '../actions/userActions';

const baseURL = 'http://127.0.0.1:8000';

export const axiosInstance = (userInfo, dispatch) => {
    const instance = axios.create({
        'mode': 'cors',
        baseURL: baseURL,
        headers:  {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo?.access}`,
        }
    });

    instance.interceptors.request.use(async (req) => {
            const user = jwt_decode(userInfo.access);
            const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 5000;
            if (!(isExpired)) {
                return req
            }

            const response = await axios.post(
                '/api/v1/users/token/refresh/', { refresh: userInfo.refresh },
            );


            dispatch(updateAccessToken(response.data))
            req.headers.Authorization = `Bearer ${response.data.access}`;
            return req;
    });
    return instance
}
 */


/*
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export const Api = axios.create({
  baseURL:"http://localhost:8080/api"
});

// Interceptors
Api.interceptors.request.use(
  (config): AxiosRequestConfig => {
    return config;
  },
  (error): any => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  async (response): Promise<any> => {
    return response;
  },
  async (error): Promise<any> => {
    return Promise.reject(error);
  }
);

 */
