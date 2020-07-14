
import {createStore,combineReducers,applyMiddleware} from 'redux'
import expenseReducer from './reducers/expenseReducer';
import {logger} from 'redux-logger'
const rootReducer = combineReducers({
    expenseState:expenseReducer
})

const configureStore = () => createStore(rootReducer,applyMiddleware(logger))

export default configureStore;















