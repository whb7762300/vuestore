import axios from 'axios'

if (!http) var http = {};

axios.defaults.timeout = 10000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/api';   //配置接口地址


//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    let result = res.data;
    //对响应数据做些事
    if (result.status == 0) {
        return Promise.resolve(result);
    } else if (result.status != 0) {
        return Promise.reject(result.message);
    }
    return res;
}, (error) => {
    return Promise.reject('请求失败');
});


//POST传参序列化(添加请求拦截器)
/*axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    console.log('错误的传参')
    return Promise.reject(error);
});*/

http.postRequest = function postRequest(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    });
}

http.getRequest = function getRequest(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    });
}

export default http;