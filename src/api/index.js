import {TIMEOUT, ERR_OK, baseURL, STATUS} from './config'
import axios from 'axios'

// axios 配置
const xhr = axios.create({
    baseURL: baseURL.dev,
    timeout: TIMEOUT,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})

// Add a request interceptor
xhr.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})

// Add a response interceptor
xhr.interceptors.response.use(function (response) {
    // Do something with response data
    if (response[STATUS] === ERR_OK) {
        return response.data
    } else {
        // 接口异常返回
        const flag = parseInt(response[STATUS], 10)
        const msg =
            flag === 201
                ? '201 error: Missing parameter'
                : flag === 202
                    ? '202 error: Parameter is malformed'
                    : flag === 500
                        ? '500 error: Background error'
                        : flag === '501' ? '501 error: No data' : flag === '502' ? '502 error: Session expired' : 'Unknown error'
        return Promise.reject(response.data)
    }
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
})

export default xhr
