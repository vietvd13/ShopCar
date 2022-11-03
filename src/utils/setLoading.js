import store from '../store';

function setLoading(status) {
  if ([true, false].includes(status)) {
    store.dispatch('loading/setLoading', status);
  }
}

export {
  setLoading
}