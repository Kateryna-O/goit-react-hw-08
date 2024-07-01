export const selectUser = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;

export const selectorisLoggedIn = (state) => state.auth.isLoggedIn;

export const selectorisRefreshing = (state) => state.auth.isRefreshing;
