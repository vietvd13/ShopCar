import request from '../service';
import CONSTANTS from '../../constants';

export function postLogin(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.LOGIN, BODY, PARAMS);
}