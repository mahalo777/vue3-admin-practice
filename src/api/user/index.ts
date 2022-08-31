// 权限问题后期增加
import request, { post, get } from '/@/utils/http/axios'
enum URL {
  login = '/user/login',
  logout = '/user/logout',
  profile = '/user/profile',
  table = '/user/table',
  add = '/user/add',
  remove = '/user/remove',
  edit = '/user/edit',
  getById = '/user/getUserById',
}
interface LoginRes {
  token: string
}

interface AddParams {
  user_name: string
  real_name: string
  email: string
  role: string
}

export interface LoginData {
  username: string
  password: string
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
export const addUser = (data: AddParams) => post({ url: URL.add, data })
export const updateUser = (data: AddParams) => post({ url: URL.edit, data })
export const delUser = (data: { user_id: string }) => post({ url: URL.remove, data })
export const getUserById = (data: { user_id: string }) => get({ url: URL.getById, params: data })
