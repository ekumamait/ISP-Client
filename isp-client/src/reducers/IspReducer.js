import { GETALLISP, GETSINGLEISP, CREATEISP } from '../constants/ActionTypes';

const initialState = {
    isp: {}
  };
  
  const ispReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETSINGLEISP:
            return { ...state, singleList: action.payload };
        case GETALLISP:
            return { ...state, responseData: action.payload };
        case CREATEISP:
            return { ...state, createResponseData: action.payload };
        default:
            return state;
    }
  };
  
  export default ispReducer;