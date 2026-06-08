import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'

const AUTH_PATHS = ['/merchant/auth/login', '/merchant/register']

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000
})

request.interceptors.request.use((config) => {
  const isAuthRequest = AUTH_PATHS.some((path) => config.url?.includes(path))
  if (!isAuthRequest) {
    const token = localStorage.getItem('merchant_token')
    if (token) {
      config.headers.token = token
    }
  }
  return config
})

request.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code === 200) {
      return res
    }
    ElMessage.error(res.msg || '请求失败')
    return Promise.reject(res)
  },
  (error) => {
    if (error.response?.status === 401) {
      const auth = useAuthStore()
      auth.logout()
      const onAuthPage = ['/login', '/register'].includes(router.currentRoute.value.path)
      if (!onAuthPage) {
        router.push('/login')
        ElMessage.error('登录已过期，请重新登录')
      }
    } else {
      ElMessage.error(error.response?.data?.msg || '网络错误')
    }
    return Promise.reject(error)
  }
)

export default request
