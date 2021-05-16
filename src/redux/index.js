import {combineReducers} from 'redux'
import reducer from './reducers'
import filterreducer from'./filterreducer'
export default combineReducers({reducer,filterreducer})