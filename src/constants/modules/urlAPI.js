export default {
  // Api Auth
  LOGIN: '/auth/login',
  REFRESH_TOKEN: '/auth/relogin',
  CHANGE_PASSWORD: '/auth/change-password',
  USER_INFOR: '/auth/infor',
  USER_INFOR_PUBLIC: '/auth/infor-public',
  CHANGE_USER_INFOR: "/auth/change-infor",

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
  GET_LIST_COLLABORATORS_PUBLIC: '/staff/list-public',

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
  GET_LIST_CATEGORIES: '/filter/category',
  GET_LIST_COLOR: '/filter/color',
  GET_LIST_FUEL_TYPE: '/filter/fuel-type',
  GET_LIST_GEAR_BOX: '/filter/gearbox',
  GET_LIST_CAR_TYPE: '/filter/cartype',

  // Api Banner
  GET_BANNER: '/home/banner/get',
  POST_EDIT_BANNER: '/home/banner/update',

  // Api Hotsale
  GET_LIST_HOT_SALE: '/cars/list/hotsale',

  // Api PDF
  GET_FILE_PDF_POLICY: '/policy/detail',
  GET_FILE_PDF_INSURANCE: '/insurance/detail',
  EDIT_FILE_PDF_POLICY: '/policy/edit',
  EDIT_FILE_PDF_INSURANCE: '/insurance/edit',

  // Api Car
  GET_LIST_CAR_DASHBOARD: '/cars/list',
  POST_CREATE_CAR_DASHBOARD: '/cars/create',
  GET_DETAIL_CAR_DASHBOARD: '/cars/detail'
};