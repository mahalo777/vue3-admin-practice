import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { showMessage } from './status'
import { IResponse } from './type'
import { getToken } from '/@/utils/auth'

// 如果请求超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = 5000
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false
axios.defaults.headers.common['token'] = getToken() || ''
// 允许跨域
axios.defaults.headers.post['Access-Control-Allow-Origin-Type'] = '*'
axios.defaults.baseURL = import.meta.env.BASE_URL + ''

// axios实例拦截响应
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code !== 200) {
      ElMessage.error(response.data.message)
      return Promise.reject(response.data)
    }
    return response.data?.result || {}
  },
  // 请求失败
  (error: any) => {
    console.log('err', error)
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status)
      return Promise.reject(response.data)
    }
    ElMessage.error('网络连接异常,请稍后再试!')
  },
)

export default axios
