import request from '../service';
import CONSTANTS from '../../constants';

export function postLogin(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.LOGIN, BODY, PARAMS);
}

export function postRefreshToken(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.REFRESH_TOKEN, BODY, PARAMS);
}