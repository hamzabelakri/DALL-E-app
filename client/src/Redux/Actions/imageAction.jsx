import axios from "axios";
import {GET_IMAGE } from "../Types";

export const getImage = (form) => async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:7000/api/v1/dalle', form);
      dispatch({ type: GET_IMAGE, payload: response.data });
     
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };