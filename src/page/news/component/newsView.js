import React, {Component} from 'react'
import NewsList from './list'

class NewsView extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    render() {
        return (<div>
            <NewsList {...this.props}/>
        </div>)
    }
}

export default NewsView