import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index'
import * as Antd from 'antd'
import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.css'
import './assets/css/reset.css'

//添加注释
const render = (Component) => {
    ReactDOM.render(
        <Component/>,
        document.getElementById('root'));
}

render(Router);
registerServiceWorker();