import { combineReducers } from 'redux';
import errorReducer from './ErrorReducer';
import ispReducer from './IspReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  isp: ispReducer,
});

export default rootReducer;