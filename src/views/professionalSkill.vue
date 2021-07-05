<template>
    <div class="professionalSkill">
        <div class="banner">
            <img src="../assets/professional_bg.png" alt="" class="service_bg">
        </div>
        <div class="content">
            <div class="title">专业技能</div>
            <div class="en_title">Professional skills</div>
            <project-items :list="project"></project-items>
        </div>
    </div>
</template>

<script>
    import projectItems from "../components/projectItems";

    export default {
        name: "ProfessionalSkill",
        components: {projectItems},
        data() {
            return {
                project: [
                    {en:'management',font:'60',
                        hash: 'management',
                        title: '独特管理系统',
                        img: require('../assets/manage.png'),
                        text: "坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；预计客户的需求，迅速帮助客户解决问题并努力使客户满意；" +
                            "无微不至的关怀客户，并以实际行动让客户感动。"
                    },
                    {en:'Professional equipment',font:'36',
                        hash: 'equipment',
                        title: '专业设备',
                        img: require('../assets/special.png'),
                        text: "坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"
                    },
                    {en:'job training',font:'52',
                        hash: 'jobs',
                        title: '独特岗位培训',
                        img: require('../assets/training.png'),
                        text: "坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"
                    },
                    {en:'Operation specification',font:'36',
                        hash: 'operation',
                        title: '操作规范',
                        img: require('../assets/opration.png'),
                        text: "坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户；预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。"
                    },
                ],
            }
        },
        created() {

        },
        methods: {

        }
    };
</script>

<style scoped lang="less">
    .professionalSkill {
        width: 100%;
        background: #ffffff;
        font-family: PingFangSC-Semibold, PingFang SC;
        color: #333333;

        .service_bg {
            width: 100%;
        }

        .content {
            width: 1200px;
            margin: 0 auto;
            padding-top: 80px;
            padding-bottom: 80px;

            .title {
                text-align: center;
                font-size: 48px;
                font-weight: 600;
                margin-bottom: 20px;
            }

            .en_title {
                font-size: 24px;
                font-weight: 600;
                text-align: center;
                margin-bottom: 60px;
            }

            .tabs {
                justify-content: center;
                display: flex;
                margin-bottom: 120px;

                .item {
                    font-weight: 600;
                    width: 160px;
                    height: 60px;
                    line-height: 60px;
                    font-size: 18px;
                    border: 1px solid #333333;
                    text-align: center;
                    cursor: pointer;

                    &:hover {
                        background: #7b2063;
                        color: white;
                    }
                }

                .active {
                    background: #7b2063;
                    color: white;
                }
            }
        }
    }

</style>

