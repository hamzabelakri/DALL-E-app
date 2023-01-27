import axios from "axios";
import { GET_IMAGE } from "../Types";

export const getImage = (prompt) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:7000/api/v1/dalle",
      prompt
    );
    dispatch({ type: GET_IMAGE, payload: response.data });

   
  } catch (error) {
    console.log(error);
  }
};
