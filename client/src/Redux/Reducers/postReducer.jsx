import {GET_POSTS, ADD_POST } from "../Types";

const initState = { posts: [] , post: {}};
const postReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {...state, post :action.payload}
      case GET_POSTS:
        return {...state, posts :[...action.payload]}
    default:
      return state;
  }
};

export default postReducer;
