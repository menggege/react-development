import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import News from './news'
import Menu from './menu'


const store = createStore(
    combineReducers({
        News,
        Menu
    }),
    applyMiddleware(
        ReduxThunk   // 允许我们 dispatch() 函数
    )
)

export default store