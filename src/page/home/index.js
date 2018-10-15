import {connect} from 'react-redux'
import {getNews} from '../../store/news'
import HomeView from './component/homeView'

const mapStateToProps = (state) => ({
    news: state.News,
    menu: state.Menu
})

const mapDispatchToProps = {
    getNews
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)