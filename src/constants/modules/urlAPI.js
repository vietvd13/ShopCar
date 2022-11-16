export default {
  // Api Auth
  LOGIN: '/auth/login',
  REFRESH_TOKEN: '/auth/relogin',

  // Api Upload
  UPLOAD_IMAGE: '/upload/image',
  UPLOAD_IMAGES: '/upload/image-multiple',
  UPLOAD_FILE: '/upload/file',

  // Api Home
  GET_LIST_CAR: '/cars/list',
  GET_DETAIL_CAR: '/cars/detail',
  GET_ALL_COLLABORATORS: '/staff/list',

  // Api Cộng tác viên
  GET_LIST_COLLABORATORS: '/staff/list',
  POST_CREATE_COLLABORATORS: '/staff/create',
  GET_DETAIL_COLLABORATORS: '/staff',
  POST_EDIT_COLLABORATORS: '/staff/edit',
  POST_DELETE_COLLABORATORS: '/staff/remove',

  // Api Khoảnh khắc vui vẻ
  GET_LIST_HAPPY_MOMENT: '/review/list',
  POST_CREATE_HAPPY_MOMENT: '/review/create',
  GET_DETAIL_HAPPY_MOMENT: '/review/detail',
  POST_EDIT_HAPPY_MOMENT: '/review/edit',
  POST_DELETE_HAPPY_MOMENT: 'review/remove',

  // Api Hỗ trợ khác hàng
  GET_LIST_CUSTOMER_SUPPORT: '/support/get',
  POST_CREATE_CUSTOMER_SUPPORT: '/support/create',
  POST_DETAIL_CUSTOMER_SUPPORT: '/support/detail',
  POST_EDIT_CUSTOMER_SUPPORT: '/support/edit',

  // Api Filter
  GET_LIST_CATEGORIES: '/category/list',
  GET_LIST_COLOR: '/filter/color',
  GET_LIST_FUEL_TYPE: '/filter/fuel-type',
  GET_LIST_GEAR_BOX: '/filter/gearbox',
};