import request from '../service';
import CONSTANTS from '../../constants';

export function getListCar(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_LIST_CAR, BODY, PARAMS);
}

export function getDetailCar(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_DETAIL_CAR, BODY, PARAMS);
}

export function getListCollaborators(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_ALL_COLLABORATORS, BODY, PARAMS);
}

export function postCreateContactSupport(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_CREATE_CUSTOMER_SUPPORT, BODY, PARAMS);
}