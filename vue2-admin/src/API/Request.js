import Axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const requests = Axios.create({
  baseURL:'/api',
  timeout:5000
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
  nprogress.start()
  return config
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
  nprogress.done()
  return res.data
},(error)=>{
  return Promise.reject(new Error('faile'))
})

export default requests