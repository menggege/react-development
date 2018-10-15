const GETNEWS="GETNEWS"
const DELNEW="DELNEW"

export const getNews = () => {
    return {
        type: GETNEWS
    }
}

export const delNew = (_index) => {

    return {
        type: DELNEW,
        index: _index
    }
}

let initState = {
    list: [
        {
            id: 1,
            title: '征金在线,九次方大数据为福建省级企业搭建征信管理平台',
            content: '金融业供给侧结构性改革的发力点，集中在实体经济对金融需求的热点、难点、痛点。而目前出现的资金“脱实向虚”、中小企业融资难、P2P爆雷跑路等现象，折射出金融业供给侧普遍存在的一些问题。其中，信用建设体制不健全，监管不到位，是影响金融行业换挡加速的关键性风险。'
        },
        {
            id: 2,
            title: '九次方大数据济宁公共信用信息平台筑稳社会基石',
            content: '信用状况总体不明朗，是当前我国市场经济发展的一个薄弱环节，已成为影响和制约经济发展的突出因素。由于缺乏足够的信用，直接导致不少企业陷入危机，社会影响恶劣案件频发，建立和健全国民经济的信用体系，打造“信用中国”，成为经济社会建设的当务之急。'
        },
        {
            id: 3,
            title: '聚焦政府数据价值释放、城市应用场景构建',
            content: '一直以来，九次方大数据站在中国大数据产业的全局视角发展企业，率先认识到数据具有资产价值，敏锐地捕捉到激活“深藏闺中”政府数据的意义，植根全国各地服务于全国各级政府政务数据应用，成为大数据行业内独树一帜的数据资产运营商，获得了众多领导的关怀与肯定。'
        },
        {
            id: 4,
            title: '开封市大数据产业发展有限公司喜获“大学科技园杯”二等奖',
            content: ' 8月1日，“大学科技园杯”第七届中国创新创业大赛河南开封分赛区暨开封市第二届创新创业大赛圆满落幕，开封市大数据产业发展有限公司喜获大赛二等奖。'
        },
        {
            id: 5,
            title: '九次方大数据召开大数据助力全面改革深化落地座谈会',
            content: '8月2日，九次方大数据召开座谈会，主题围绕如何运用大数据为中央全面深化改革落地提供支撑体系和管理执行环境。会议以大数据和信息化视角，涵盖政企学研各领域专家，全面看待新常态下该怎样运用新技术，革新改革意识，提升改革能力，更好推动各项改革部署落地见效。'
        }]
}

const newsReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case GETNEWS:
            return state;
        case DELNEW:
            let temp = Object.assign([], state.list);
            temp.splice(action.index, 1);
            return {...state, list: temp}
        default:
            return state;
    }
}

export default newsReducer