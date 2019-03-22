import * as ACTION from "../actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case ACTION.AUTH_FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};
