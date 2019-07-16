import axios from "axios"
// const URL ="https://bird.ioliu.com";
// "localhost:8899"
const baseURL=location.host.indexOf(".com")!=-1?"":"/apis";
// console.log(location.host)
// console.log(location.host.indexOf("8899"))
// console.log(baseURL);
// 区分 
// 本地环境
// 例如:
// localhost  127.0.0.1 xxx.xxx.xxx

//生产环境

// www.baidu.com

// url:baseURL+"/index"

let ajaxConfig={
		baseURL,
		timeout: 20000,
		transformRequest: [function (data) {
		// 对 data 进行任意转换处理
		return data;
		}],

		// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
		transformResponse: [function (data) {
		// 对 data 进行任意转换处理

		return data;
		}],
		withCredentials: true,
		responseType: 'json'

}

var instance = axios.create(ajaxConfig)

instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

export default instance;
