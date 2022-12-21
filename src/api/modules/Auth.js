import request from '../service';
import CONSTANTS from '@/constants';

export function postLogin(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.LOGIN, BODY, PARAMS);
}

export function postRefreshToken(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.REFRESH_TOKEN, BODY, PARAMS);
}

export function postChangePassword(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.CHANGE_PASSWORD, BODY, PARAMS);
}

export function postUserInfor(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.USER_INFOR, BODY, PARAMS);
}

export function postChangeUserInfor(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.CHANGE_USER_INFOR, BODY, PARAMS);
}