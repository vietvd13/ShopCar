import request from '../service';
import CONSTANTS from '@/constants';

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

export function getFilterCategoriesList(BODY = null, PARAMS = null) {
  return request.getRequest(CONSTANTS.URL_API.GET_FILTER_CATEGORIES_LIST, BODY, PARAMS);
}

export function getListCategories(BODY = null, PARAMS = null) {
  return request.getRequest(CONSTANTS.URL_API.GET_LIST_CATEGORIES, BODY, PARAMS);
}

export function getListColor(BODY = null, PARAMS = null) {
  return request.getRequest(CONSTANTS.URL_API.GET_LIST_COLOR, BODY, PARAMS);
}

export function getListFuleType(BODY = null, PARAMS = null) {
  return request.getRequest(CONSTANTS.URL_API.GET_LIST_FUEL_TYPE, BODY, PARAMS);
}

export function getListGearBox(BODY = null, PARAMS = null) {
  return request.getRequest(CONSTANTS.URL_API.GET_LIST_GEAR_BOX, BODY, PARAMS);
}

export function getListCarType(BODY = null, PARAMS = null) {
  return request.getRequest(CONSTANTS.URL_API.GET_LIST_CAR_TYPE, BODY, PARAMS);
}

export function getListHappyMoment(BODY = { limit: 8, page: 1 }, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_LIST_HAPPY_MOMENT, BODY, PARAMS);
}

export function postCreateSupport(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_CREATE_CUSTOMER_SUPPORT, BODY, PARAMS);
}

export function getBanner(BODY = null, PARAMS = null) {
  return request.getRequest(CONSTANTS.URL_API.GET_BANNER, BODY, PARAMS);
}

export function getAllCollaborators(BODY = null, PARAMS = null) {
  return request.getRequest(CONSTANTS.URL_API.GET_LIST_COLLABORATORS_PUBLIC, BODY, PARAMS);
}

export function getDetailHappyMoment(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_DETAIL_HAPPY_MOMENT, BODY, PARAMS);
}

export function getListHotSale(BODY = null, PARAMS = null) {
  BODY = {
    page: 1,
    limit: 20,
    sort: {
      is_hotsale: -1,
    }
  }

  return request.postRequest(CONSTANTS.URL_API.GET_LIST_CAR, BODY, PARAMS);
}

export function getFilePDFPolicy() {
  return request.postRequest(CONSTANTS.URL_API.GET_FILE_PDF_POLICY);
}

export function getFilePDFInsurance() {
  return request.postRequest(CONSTANTS.URL_API.GET_FILE_PDF_INSURANCE);
}

export function getProfilePublic() {
  return request.postRequest(CONSTANTS.URL_API.USER_INFOR_PUBLIC);
}

export function getAllModelCar() {
  return request.getRequest(CONSTANTS.URL_API.GET_ALL_MODEL_CAR);
}