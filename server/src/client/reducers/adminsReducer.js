import * as ACTION from "../actionTypes.js";

const initialState = {
  adminsAll: [],
  fetching: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION.ADMINS_FETCH_START:
      return {
        ...state,
        fetching: true
      };
    case ACTION.ADMINS_FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: true
      };
    case ACTION.ADMINS_FETCH_ALL:
      return {
        ...state,
        adminsAll: action.payload.data,
        fetching: false,
        error: false
      };
    default:
      return state;
  }
};
