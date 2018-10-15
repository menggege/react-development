import React, {Component} from 'react'
import  {Switch, Route, Redirect} from 'react-router-dom'
import {Home, News, About} from '../router/component'
import Header from '../component/header'
import Footer from '../component/footer'

class Layout extends Component {
    constructor(props) {
        super(props)
        /*
         <Route path={`${this.props.match.path}/index`} component={Home}/>
         <Route path={`${this.props.match.path}/news`} component={News}/>
         <Route path={`${this.props.match.path}/about`} component={About}/>
         <Redirect from="/" to={`${this.props.match.path}/index`}/>
         */
    }

    render() {
        return (<div>
            <Header/>
            <Switch>
                <Route path="/index" component={Home}/>
                <Route path="/news" component={News}/>
                <Route path="/about" component={About}/>
                <Redirect from="/" to="/index"/>
            </Switch>
            <Footer/>
        </div>)
    }
}
export default Layout