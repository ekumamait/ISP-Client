import { GETALLISP, GETSINGLEISP, CREATEISP } from '../constants/ActionTypes';

const initialState = {
    isp: [],
    singleIsp: {},
    createIsp: {}
  };
  
  const ispReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETSINGLEISP:
            return { ...state, singleIsp: action.payload };
        case GETALLISP:
            return { ...state, isp: action.payload };
        case CREATEISP:
            return { ...state, createIsp: action.payload };
        default:
            return state;
    }
  };
  
  export default ispReducer;