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
