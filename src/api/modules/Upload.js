import request from '../service';
import CONSTANTS from '@/constants';

export function postImage(IMAGE = null, PARAMS = null) {
  const BODY = new FormData();

  BODY.append('image', IMAGE);

  return request.postFileRequest(CONSTANTS.URL_API.UPLOAD_IMAGE, BODY, PARAMS);
}

export function postImages(IMAGES = [], PARAMS = null) {
  const BODY = new FormData();

  const len = IMAGES.length;
  let idx = 0;

  while (idx < len) {
    BODY.append('images', IMAGES[idx].url);

    idx++;
  }

  return request.postFileRequest(CONSTANTS.URL_API.UPLOAD_IMAGES, BODY, PARAMS);
}

export function postFile(FILE = null, PARAMS = null) {
  const BODY = new FormData();

  BODY.append('file', FILE)

  return request.postFileRequest(CONSTANTS.URL_API.UPLOAD_FILE, BODY, PARAMS);
}