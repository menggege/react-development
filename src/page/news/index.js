import {connect} from 'react-redux'
import {getNews, delNew} from '../../store/news'
import NewsView from './component/newsView'

const mapStateToProps = (state) => ({
    news: state.News
})

const mapDispatchToProps = {
    getNews,
    delNew
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsView)