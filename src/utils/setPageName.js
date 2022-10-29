import lang from '../langs';

function setPageName(name = null, i18n = false) {
  if (name) {
    if (i18n) {
      document.title = lang.$t(name);

      return;
    }

    document.title = name;

    return;
  }

  document.title = process.env.VUE_APP_APP_NAME || 'Shop Car';
}

export {
  setPageName
}