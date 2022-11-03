import request from '../service';
import CONSTANTS from '../../constants';

export function getListCar(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_LIST_CAR, BODY, PARAMS);
}