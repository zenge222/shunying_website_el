import router from 'vue-router'
import Vue from "vue";
import Home from "../views/home"
import EnterEnterprise from "../views/enterEnterprise"
import ServiceScope from "../views/serviceScope"
import SuccessCases from "../views/successCases"
import ProfessionalSkill from "../views/professionalSkill"
import CorporateCulture from "../views/corporateCulture"
import TalentRecruitment from "../views/talentRecruitment"
import NewsPage from "../views/newsPage"
import ContactUs from "../views/contactUs"
import NewsDetail from "../views/newsDetail"
import HomeDefault from '../views/homeDefault'


Vue.use(router)

export default new router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/homeDefault', // 设置默认打开的页面
            meta: {
                title: "首页"
            },
            children: [
                {
                    path: '/homeDefault',
                    name: 'HomeDefault',
                    component: HomeDefault,
                    meta: {
                        title: "首页"
                    },
                },
                {
                    path: '/enterEnterprise',
                    name: 'enterEnterprise',
                    component: EnterEnterprise,
                    meta: {
                        title: "走进舜瀛"
                    },
                },
                {
                    path: '/serviceScope',
                    name: 'ServiceScope',
                    component: ServiceScope,
                    meta: {
                        title: "服务范围",
                        img: require('../assets/service_area.png'),
                        tabs: [
                            {
                                title: '物业管理',
                                itemsTab: [
                                    { name: '/serviceScope', hash: '#procter', title: '保洁服务' },
                                    { name: '/serviceScope', hash: '#security', title: '安保服务' },
                                    { name: '/serviceScope', hash: '#greening', title: '绿化服务' },
                                    { name: '/serviceScope', hash: '#engineering', title: '工程维修' },
                                    { name: '/serviceScope', hash: '#customer', title: '客户服务' },
                                    { name: '/serviceScope', hash: '#sales', title: '租赁销售' },
                                    { name: '/serviceScope', hash: '#housekeeping', title: '家政服务' },
                                    { name: '/serviceScope', hash: '#community', title: '社区养老' },
                                    { name: '/serviceScope', hash: '#childcare', title: '幼托服务' },
                                ]
                            },
                            {
                                title: '专业清洁',
                                itemsTab: [
                                    { name: '/serviceScope', hash: '#forest', title: '开荒服务' },
                                    { name: '/serviceScope', hash: '#wall', title: '外墙清洗' },
                                    { name: '/serviceScope', hash: '#carpet', title: '地毯清洗' },
                                    { name: '/serviceScope', hash: '#air', title: '空气治理' },
                                ]
                            },
                        ]
                    },
                },
                {
                    path: '/successCases',
                    name: 'SuccessCases',
                    component: SuccessCases,
                    meta: {
                        title: "成功案例"
                    },
                },
                {
                    path: '/professionalSkill',
                    name: 'ProfessionalSkill',
                    component: ProfessionalSkill,
                    meta: {
                        title: "专业技能"
                    },
                },
                {
                    path: '/corporateCulture',
                    name: 'CorporateCulture',
                    component: CorporateCulture,
                    meta: {
                        title: "企业文化"
                    },
                },
                {
                    path: '/newsPage',
                    name: 'NewsPage',
                    component: NewsPage,
                    meta: {
                        title: "最新动态"
                    },
                },
                {
                    path: '/newsDetail',
                    name: 'NewsDetail',
                    component: NewsDetail,
                    hidden: true,
                    meta: {
                        title: "最新动态2"
                    },
                },

                {
                    path: '/talentRecruitment',
                    name: 'TalentRecruitment',
                    component: TalentRecruitment,
                    meta: {
                        title: "人才招聘"
                    },
                },
                {
                    path: '/contactUs',
                    name: 'ContactUs',
                    component: ContactUs,
                    meta: {
                        title: "联系我们"
                    },
                },
            ]
        },

    ]
})


const originalPush = router.prototype.push
router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


