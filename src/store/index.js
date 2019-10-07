import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 30
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REMOVE_COUNTER":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD_COUNTER":
      return {
        ...state,
        counter: action.value
      };
    default:
      return state;
  }
};

export default createStore(reducer);
