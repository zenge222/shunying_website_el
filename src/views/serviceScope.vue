<template>
    <div class="serviceScope">
        <div class="banner">
            <img src="../assets/service_area_bg.png" alt="" class="service_bg">
        </div>
        <div class="content">
            <div class="title">服务范围</div>
            <div class="en_title">Service scope</div>
            <div class="tabs">
                <div :class="{item:true,active:activeIndex == 1}" style="margin-right: 16px" @click="changTabs(1)">物业管理</div>
                <div :class="{item:true,active:activeIndex == 2}" @click="changTabs(2)">专业清洁</div>
            </div>
            <transition name="el-fade-in">
                <div v-if="activeIndex ==1">
                    <project-items :list="project"></project-items>
                </div>
            </transition>
            <transition name="el-fade-in">
                <div v-if="activeIndex ==2">
                    <project-items :list="projectStandard"></project-items>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import projectItems from "../components/projectItems";
    export default {
        name: "ServiceScope",
        components: {projectItems},
        data(){
            return{
                activeIndex:window.localStorage.getItem('serviceIndex')||1,
                project:[
                    {font:'60',en:'Cleaning',hash:'procter',title:'保洁服务',img:require('../assets/procter.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；" +
                            "预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                    {font:'60',en:'security',hash:'security',title:'安保服务',img:require('../assets/security.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；" +
                            "预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                    {font:'60',en:'greening',hash:'greening',title:'绿化服务',img:require('../assets/greening.png'),text:"以“遵守法律法规、倡导绿色生活、积极预防污染、营造清洁环境、提高环保意识、不断持续改进”为环境方针，" +
                            "遵循“以人为本”的服务理念，现已形成独具特色的舜瀛物业管理模式。"},
                    {font:'60',en:'engineering',hash:'engineering',title:'工程维修',img:require('../assets/engineering.png'),text:"拥有一批专业的技术人员及经验丰富的施工队伍，各岗位人员均通过 严格培训，在全力参与市场的竞争与挑战中，" +
                            "各项业务得到不断扩展，物业维修水平亦不断攀升!"},
                    {font:'60',en:'customer',hash:'customer',title:'客户服务',img:require('../assets/customer.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；" +
                            "预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                    {font:'60',en:'lease',hash:'sales',title:'租赁销售',img:require('../assets/sales.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；" +
                            "预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                    {font:'60',en:'housekeeping',hash:'housekeeping',title:'家政服务',img:require('../assets/housekeeping.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；" +
                            "预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                    {font:'60',en:'Pension',hash:'community',title:'社区养老',img:require('../assets/community.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；" +
                            "预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                    {font:'60',en:'childcare',hash:'childcare',title:'幼托服务',img:require('../assets/childcare.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；" +
                            "预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                ],
                projectStandard:[
                    {font:'60',en:'reclaim',hash:'forest',title:'开荒服务',img:require('../assets/forest.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；预计客户的需求，" +
                            "迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                    {font:'36',en:'External wall cleaning',hash:'wall',title:'外墙清洗',img:require('../assets/wall.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；预计客户的需求，" +
                            "迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                    {font:'45',en:'Carpet cleaning',hash:'carpet',title:'地毯清洗',img:require('../assets/carpet.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；预计客户的需求，" +
                            "迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                    {font:'45',en:'Air pollution',hash:'air',title:'空气治理',img:require('../assets/air.png'),text:"坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；" +
                            "预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"},
                ]
            }
        },
        created() {

        },
        methods:{
            changTabs(index){
                this.activeIndex = index
            },
        }
    };
</script>

<style scoped lang="less">
    .serviceScope {
        width: 100%;
        background: #ffffff;
        font-family: PingFangSC-Semibold, PingFang SC;
        color: #333333;
        .service_bg{
            width: 100%;
        }
        .content{
            width: 1200px;
            margin: 0 auto;
            padding-top: 80px;
            padding-bottom: 80px;
            .title{
                text-align: center;
                font-size: 48px;
                font-weight: 600;
                margin-bottom: 20px;
            }
            .en_title{
                font-size: 24px;
                font-weight: 600;
                text-align: center;
                margin-bottom: 60px;
            }
            .tabs{
                justify-content: center;
                display: flex;
                margin-bottom: 120px;
                .item{
                    font-weight: 600;
                    width: 160px;
                    height: 60px;
                    line-height: 60px;
                    font-size: 18px;
                    border: 1px solid #333333;
                    text-align: center;
                    cursor: pointer;
                    &:hover{
                        background: #7b2063;
                        color: white;
                    }
                }
                .active{
                    background: #7b2063;
                    color: white;
                }
            }
        }
    }

</style>
