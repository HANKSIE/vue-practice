export default {
  lock: function(state) {
    state.isLock = true;
  },
  unlock: function(state) {
    state.isLock = false;
  },
  openOverlay: function(state) {
    state.isOverlay = true;
  },
  closeOverlay: function(state) {
    state.isOverlay = false;
  },
  pushToToastQueue: function(state, payload) {
    state.toastQueue.push(payload.instance);
  },
  removeFromToastQueue: function(state, payload) {
    state.toastQueue = state.toastQueue.filter((instance) => {
      return instance !== payload.instance;
    });
  },
  insertConfirm: function(state, payload) {
    state.confirm = payload.instance;
  },
  removeConfirm: function(state) {
    state.confirm = null;
  },
  login: function(state, payload) {
    state.auth = payload.auth;
  },
  logout: function(state) {
    state.auth = null;
  },
};
