import * as ACTION from "../actionTypes.js";

const initialState = {
  usersAll: [],
  fetching: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION.USERS_FETCH_START:
      return {
        ...state,
        fetching: true
      };
    case ACTION.USERS_FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: true
      };
    case ACTION.USERS_FETCH_ALL:
      return {
        ...state,
        usersAll: action.payload.data,
        fetching: false,
        error: false
      };
    default:
      return state;
  }
};
