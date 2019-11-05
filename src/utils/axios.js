import axios from 'axios';
// Add a request interceptor
import store from '../store/store'
import actionCreator from '../store/actionCreator'
import webstorage from './webstorage'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // let data=config.data
    // console.log(config,"请求拦截器")
    
    if(!config.data){
      config.data={}
    }
    config.data.token=webstorage.getItem('token')
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log('请拦截器',response)
    let {err}=response.data
    let arr=[-997,-998]
    if(arr.indexOf(err)>=0){
        let action=actionCreator.changeTokenModal(false)
        store.dispatch(action)
    }
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  export default axios