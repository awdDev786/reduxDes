import { combineReducers } from 'redux';
import tableReducer from './tableReducer';

const appReducers = combineReducers({
    tables: tableReducer
});
export default appReducers;
