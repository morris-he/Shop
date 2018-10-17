//#创建http.js文件
import axios from 'axios'
import router from '@/router'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:8000';

// http request 拦截器
axios.interceptors.request.use(
    config => { //将所有的axios的header里加上token_type和access_token
        config.headers.Authorization = `${localStorage.token_type} ${localStorage.access_token}`;
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // 401 清除token信息并跳转到登录页面
        if (error.response.status == 401) {
            alert('登录信息有误！请重新登录')
            router.replace({    //如果失败，跳转到登录页面
                name: 'login'
            })
        }
        return Promise.reject(error.response.data)
    });

export default axios;       //然后再次export出去，嘿嘿 main.js那里就得改改咯
