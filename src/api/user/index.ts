// 权限问题后期增加
import request, { post } from '/@/utils/http/axios'
enum URL {
  login = '/user/login',
  logout = '/user/logout',
  profile = '/user/profile',
  table = '/user/table',
}
interface LoginRes {
  token: string
}

export interface LoginData {
  username: string
  password: string
}

export interface IGetRes {
  a: string
}

export const login = (data: LoginData) => {
  return request<LoginRes>({
    url: URL.login,
    method: 'post',
    data,
  })
}

export const getUserProfile = () => {
  return request({
    url: URL.profile,
    method: 'get',
  })
}

export const logout = () => post<LoginRes>({ url: URL.logout })
export const getUserTable = () => post<LoginRes>({ url: URL.table })
