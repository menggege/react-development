import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './index.scss'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: [
                {name: '首页', path: '/'},
                {name: '新闻', path: '/news'},
                {name: '关于', path: '/about'}
            ]
        }
    }
    
    render() {
        return (
            <div className="header-con">
                <ul>
                    {
                        this.state.menus.map((menu,index) => {
                            return <li key={index}><Link to={menu.path}>{menu.name}</Link></li>
                        })
                    }
                </ul>
            </div>)
    }
}

export default Header