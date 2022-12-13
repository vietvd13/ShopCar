import request from '../service';
import CONSTANTS from '../../constants';

// Api Cộng tác viên
export function getListCollaborators(BODY = null, PRARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_LIST_COLLABORATORS, BODY, PRARAMS);
}

export function postCreateCollaborators(BODY = null, PRARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_CREATE_COLLABORATORS, BODY, PRARAMS);
}

export function getDetailCollaborators(id = null) {
  return request.getRequest(`${CONSTANTS.URL_API.GET_DETAIL_COLLABORATORS}/${id}`);
}

export function postEditCollaborators(BODY = null, PRARAMS = null) { 
  return request.postRequest(CONSTANTS.URL_API.POST_EDIT_COLLABORATORS, BODY, PRARAMS);
}

export function postDeleteCollaborators(BODY = null, PRARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_DELETE_COLLABORATORS, BODY, PRARAMS);
}

// Api Khoảnh khắc vui vẻ
export function getListHappyMoment(BODY = null, PRARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_LIST_HAPPY_MOMENT, BODY, PRARAMS);
}

export function postCreateHappyMoment(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_CREATE_HAPPY_MOMENT, BODY, PARAMS);
}

export function postDetailHappyMoment(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_DETAIL_HAPPY_MOMENT, BODY, PARAMS);
}

export function postEditHappyMoment(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_EDIT_HAPPY_MOMENT, BODY, PARAMS);
}

export function postDeleteHappyMoment(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_DELETE_HAPPY_MOMENT, BODY, PARAMS);
}

// Hỗ trợ khách hàng
export function getListCustomerSupport(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_LIST_CUSTOMER_SUPPORT, BODY, PARAMS);
}

export function postEditCustomerSupport(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_EDIT_CUSTOMER_SUPPORT, BODY, PARAMS);
}

// Banner
export function getBanner(BODY = null, PARAMS = null) {
  return request.getRequest(CONSTANTS.URL_API.GET_BANNER, BODY, PARAMS);
}

export function postEditBanner(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_EDIT_BANNER, BODY, PARAMS);
}

// Chính sách bảo hiểm

export function postEditPolicy(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.EDIT_FILE_PDF_POLICY, BODY, PARAMS);
}

export function postEditInsurance(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.EDIT_FILE_PDF_INSURANCE, BODY, PARAMS);
}

// Car
export function postListCar(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_LIST_CAR_DASHBOARD, BODY, PARAMS);
}

export function postCreateCar(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_CREATE_CAR_DASHBOARD, BODY, PARAMS);
}

export function postGetDetailCar(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_DETAIL_CAR_DASHBOARD, BODY, PARAMS);
}

export function postUpdateCar(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_UPDATE_CAR_DASHBOARD, BODY, PARAMS);
}

export function postDeleteCar(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_DELETE_CAR_DASHBOARD, BODY, PARAMS)
}

export function postSetHotsaleCar(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_SET_HOTSALE_CAR_DASHBOARD, BODY, PARAMS);
}

export function posetSetPirce(BODY = null, PARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_SET_PRICE_CAR_DASHBOARD, BODY, PARAMS);
}