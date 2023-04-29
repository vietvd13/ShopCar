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

  document.title = import.meta.env.VITE_APP_NAME || 'Shop Car';
}

export {
  setPageName
}