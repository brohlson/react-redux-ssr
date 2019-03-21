import axios from "axios";
import * as ACTION from "../actionTypes.js";

export const usersFetchAll = () => async dispatch => {
  dispatch({
    type: ACTION.USERS_FETCH_START
  });

  try {
    const res = await axios.get("http://react-ssr-api.herokuapp.com/users");
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
