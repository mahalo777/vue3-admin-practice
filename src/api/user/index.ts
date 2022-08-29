// 权限问题后期增加
import request from '/@/utils/http/axios'
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

// const getUserProfile = async () => get<UserState>({ url: URL.profile })
// const logout = async () => post<LoginRes>({ url: URL.logout })
// const getUserTable = async () => post<LoginRes>({ url: URL.table })
