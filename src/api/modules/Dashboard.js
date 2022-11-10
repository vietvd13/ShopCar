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