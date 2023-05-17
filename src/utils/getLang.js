import Cookies from "js-cookie";
import CONSTANT from "../constants";

/**
 * Function get Current Language in Cookies
 * @returns Current Language (String)
 */
export function getLanguage() {
  const chooseLanguage = Cookies.get(CONSTANT["COOKIES"]["LANGUAGE"]);

  if (chooseLanguage) {
    return chooseLanguage;
  }

  const LANG_DEFAULT = process.env.VUE_APP_DEFAULT_LANG || "kr";

  Cookies.set(CONSTANT["COOKIES"]["LANGUAGE"], LANG_DEFAULT);

  return LANG_DEFAULT;
}
