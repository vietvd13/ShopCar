import request from '../service';
import CONSTANTS from '../../constants';

export function getListCollaborators(BODY = null, PRARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.GET_LIST_COLLABORATORS, BODY, PRARAMS);
}

export function postCreateCollaborators(BODY = null, PRARAMS = null) {
  return request.postRequest(CONSTANTS.URL_API.POST_CREATE_COLLABORATORS, BODY, PRARAMS);
}