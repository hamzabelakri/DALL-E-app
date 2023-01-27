import axios from "axios";
import { GET_POSTS, ADD_POST } from "../Types";

export const addPost = (form) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:7000/api/v1/post",
      form
    );
    dispatch({ type: ADD_POST, payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:7000/api/v1/post");
    dispatch({ type: GET_POSTS, payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
