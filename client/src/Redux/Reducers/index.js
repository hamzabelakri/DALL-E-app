import {combineReducers} from 'redux';
import postReducer from './postReducer';
import imageReducer from './imageReducer';


const rootReducer= combineReducers({
    postReducer: postReducer,
    imageReducer: imageReducer,
})

export default rootReducer;