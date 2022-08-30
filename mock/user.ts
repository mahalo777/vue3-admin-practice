import { MockMethod } from 'vite-plugin-mock'
import { successResult, errorResult, requestParams, getRequestToken } from '/@/utils/result'
import { TokenPrefix } from '/@/utils/auth'

export function createFakeUserList() {
  return [
    {
      user_id: '3306',
      user_name: 'adm',
      real_name: '扫地盲僧',
      avatar: 'https://api.multiavatar.com/blindmonk.svg',
      password: '123',
      token: 'P1DeqWBao0HTU47Q',
      email: 'wenny333333@163.com',
      auths: [],
      is_admin: 1,
      role: 'admin',
    },
    {
      user_id: '80',
      user_name: 'test',
      real_name: '盲僧水友',
      avatar: 'https://api.multiavatar.com/test.svg',
      password: 'test',
      token: 'yg8bE8nZwiCL4nQg',
      email: '8888@china.com',
      auths: [],
      is_admin: 0,
      role: 'user',
    },
  ]
}
export default [
  {
    url: '/user/profile',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return errorResult('Invalid token')
      const checkUser = createFakeUserList().find((item) => `${TokenPrefix}${item.token}` === token)
      if (!checkUser) {
        return errorResult('未获得相应的用户信息')
      }
      return successResult(checkUser)
    },
  },
  {
    url: '/user/login',
    timeout: 200,
    method: 'post',
    response: (request: requestParams) => {
      const { username, password } = request?.body
      const checkUser = createFakeUserList().find(
        (item) => item.user_name === username && item.password === password,
      )
      if (!checkUser) {
        return errorResult('不存在该用户')
      }
      return successResult({ token: checkUser.token })
    },
  },
  {
    url: '/user/table',
    timeout: 200,
    method: 'post',
    response: () => {
      // const token = getRequestToken(request)
      // if (!token) return errorResult('Invalid token')
      const checkUser = createFakeUserList()
      if (!checkUser) {
        return errorResult('未获得相应的用户信息')
      }
      return successResult(checkUser)
    },
  },
  {
    url: '/user/logout',
    timeout: 200,
    method: 'post',
    response: (request: requestParams) => {
      console.dir(request)
      const token = getRequestToken(request)
      if (!token) return errorResult('token缺失!')
      const checkUser = createFakeUserList().find((item) => `${TokenPrefix}${item.token}` === token)
      if (!checkUser) {
        return errorResult('token缺失!')
      }
      return successResult('Token 已失效')
    },
  },
  {
    url: '/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    },
  },
] as MockMethod[]
