import React, {Component} from 'react'
import NewsList from './news'

class HomeView extends Component {
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

export default HomeView