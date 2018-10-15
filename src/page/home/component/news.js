import React, {Component} from 'react'
import './news.scss'

class NewsList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className="index-nlist">
            <h3>新闻列表</h3>
            <ul>
                {
                    this.props.news.list.map((item, index) => {
                        return (<li key={index}>
                            <h5>{item.title}</h5>
                        </li>)
                    })
                }
            </ul>
        </div>)
    }
}

export default NewsList