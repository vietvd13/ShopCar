import { service } from "./request";

export default {
  async getRequest(URL, PARAMS, DATA) {
    return await service({
      url: URL,
      method: "GET",
      params: PARAMS,
      data: DATA,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  },
  async postRequest(URL, DATA, PARAMS) {
    return await service({
      url: URL,
      method: "POST",
      data: DATA,
      params: PARAMS,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  },
  async postFileRequest(URL, DATA, PARAMS) {
    return await service({
      url: URL,
      method: "POST",
      data: DATA,
      params: PARAMS,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  async putRequest(URL, DATA, PARAMS) {
    return await service({
      url: URL,
      method: "PUT",
      data: DATA,
      params: PARAMS,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  },
  async deleteRequest(URL, DATA, PARAMS) {
    return await service({
      url: URL,
      method: "DELETE",
      data: DATA,
      params: PARAMS,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  },
};
