import {GET_IMAGE } from "../Types";

const initState = { image: {} };
const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return {...state, posts :action.payload}
    default:
      return state;
  }
};

export default imageReducer;
