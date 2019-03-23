import * as ACTION from "../actionTypes.js";

export const usersFetchAll = () => async (dispatch, getState, api) => {
  dispatch({
    type: ACTION.USERS_FETCH_START
  });

  try {
    const res = await api.get("/users");
    dispatch({
      type: ACTION.USERS_FETCH_ALL,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: ACTION.USERS_FETCH_ERROR,
      payload: error
    });
  }
};

export const adminsFetchAll = () => async (dispatch, getState, api) => {
  dispatch({
    type: ACTION.ADMINS_FETCH_START
  });

  try {
    const res = await api.get("/admins");
    dispatch({
      type: ACTION.ADMINS_FETCH_ALL,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: ACTION.ADMINS_FETCH_ERROR,
      payload: error
    });
  }
};

export const authFetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");
  dispatch({
    type: ACTION.AUTH_FETCH_CURRENT_USER,
    payload: res
  });
};
