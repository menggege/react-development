import React, {Component} from 'react'
import './newsView.scss'
import Api from '../../../api'

class NewsList extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        console.log("Api:",this.props);
        Api.get('/api_off/api/News/GetNewsList?pageindex=1&pagesize=8').then((data)=>{
            console.log("xxx:",data);
        })
    }

    del = (_index) => {
        this.props.delNew(_index);
    }

    render() {
        return (<div className="news-list">
            <h3>新闻列表</h3>
            <ul>
                {
                    this.props.news.list.map((item, index) => {
                        return (<li key={index}>
                            <h5>{item.title}</h5>
                            <p>{item.content}</p>
                            <div className="op" onClick={this.del.bind(index)}><span>删除</span></div>
                        </li>)
                    })
                }
            </ul>
        </div>)
    }
}

export default NewsList