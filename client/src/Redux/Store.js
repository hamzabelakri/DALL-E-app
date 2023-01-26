import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
  } from "redux";
 import postReducer from "./Reducers/postReducer"; 
  import thunk from "redux-thunk";
  
  function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("state", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("state");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
  
  const persistedState = loadFromLocalStorage();
  
  const store = createStore(
 postReducer, 
    persistedState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
    )
  );
  store.subscribe(() => saveToLocalStorage(store.getState()));
  
  export default store;