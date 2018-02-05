import axios from 'axios'


const $http = axios;

// 测试 tx1的 action/command 接口 [GetSystemStatus]
export const tx1_test = data => $http.post('/tx1/action/command', data);
// 测试 tx1的 action/login 接口 [登录]
export const tx1_login = data => $http.post('/tx1/action/login', data);
// 测试 tx1的 action/command 接口 [GetSystemInfo]
export const tx1_check = data => $http.post('', data)