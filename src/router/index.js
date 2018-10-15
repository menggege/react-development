import React, {Component} from 'react'
import  {BrowserRouter, HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store'
import Layout from '../layout/index'
import {Home, News, About, Login} from './component'


export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/" component={Layout}/>
                    </Switch>
                </HashRouter>
            </Provider>)
    }
}