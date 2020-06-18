import HttpClient from '@/services/http.ts';
export function LoginApi(param) {
  return HttpClient.post(`/appurl/vue_login`, param);
}
export function getAuthToken(param) {
  return HttpClient.post(`/gateway/auth/ldap/token`, param);
}
export function getToken(param) {
  return HttpClient.post(`/appurl/get_my_token`, param);
}
export function getUserInfo(param) {
  return HttpClient.get(`/gateway/admin/user/info/`, param);
}
