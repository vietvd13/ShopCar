import store from "@/store";
import router, { resetRouter } from "@/routers";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { setPageName } from "@/utils/setPageName";
import Cookies from "js-cookie";
import CONSTANTS from "@/constants";
import { handleSrollTop } from "@/utils/helper";

const DEFAULT_FILTER_PARAMS = {
  search: "",

  categories: null,
  models: null,
  car_details: null,
  rating: [],

  from_year: null,
  to_year: null,

  from_price: null,
  to_price: null,

  from_distance: null,
  to_distance: null,

  color: null,
  fuel_type: null,
  gear_box: null,
};

function isExitToken() {
  const TOKEN = Cookies.get(CONSTANTS.COOKIES.TOKEN);

  if (TOKEN) {
    return true;
  }

  return false;
}

const whiteList = [
  "/",
  "/login",
  "/shop-car",
  "/shop-car/home",
  "/shop-car/list",
  "/shop-car/detail",
];

const checkFilter = [
  "CarBuyingPolicy",
  "Insurance",
  "Contact",
  "AllCollaborators",
  "AllHappyMoment",
  "DetailHappyMoment",
  "HomeShopCar",
];

router.beforeEach((to, from, next) => {
  NProgress.start();
  setPageName();

  // reset filter when go to page need to reset filter
  if (checkFilter.includes(to.name)) {
    store.dispatch("filter/setFilter", DEFAULT_FILTER_PARAMS);
  }

  if (isExitToken()) {
    if (store.getters.initApp === 0) {
      store.dispatch("auth/setInitApp").then(() => {
        store.dispatch("auth/setAsyncRoutes").then(() => {
          if (to.name === "Login") {
            next({ name: "Dashboard" });
            NProgress.done();
          } else {
            next({ ...to, replace: true });
            NProgress.done();
          }
        });
      });
    } else {
      if (to.name === "Login") {
        next({ name: "Dashboard" });
        NProgress.done();
      } else {
        next();
        NProgress.done();
      }
    }
  } else {
    resetRouter();

    if (whiteList.indexOf(to.matched[0] ? to.matched[0].path : "") !== -1) {
      next();
    } else {
      store.dispatch("auth/setToken", "").then(() => {
        store.dispatch("auth/setRefreshToken", "").then(() => {
          next({ name: "HomeShopCar" });
          NProgress.done();
        });
      });
    }
  }
});

router.afterEach(() => {
  handleSrollTop();
  NProgress.done();
});
