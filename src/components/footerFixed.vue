<template>
    <div class="footer">
        <div class="content">
            <div class="tab_wrap">
                <img src="../assets/logo_footer.png" alt="" class="logo_footer"/>
                <img src="../assets/phone_footer.png" alt="" class="phone_footer"/>
                <div class="text_wrap">
                    <p>传真：021-61738188</p>
                    <p>业务咨询：021-61679549-804</p>
                    <p>售后投诉：021-61679549-805 15201785520</p>
                    <p>地址：上海市闵行区程家桥路258号银洲国际大厦A座606室</p>
                </div>
                <img src="../assets/code_footer.png" alt="" class="code_footer"/>
            </div>
            <div v-for="(item,index) in tabs" :key="index">
                <p class="title">{{item.title}}</p>
                <a :href="items.hash" class="items" v-for="(items,index) in item.itemsTab" :key="index" @click="goTabs(items.name,items.hash)">{{items.title}}</a>
            </div>
        </div>
        <div class="copy_right">
            Copyright © 2021-2030 上海舜瀛物业管理有限公司 版权所有
            沪ICP备11043453号-2 沪公网安备 31011202005206号
        </div>
    </div>
</template>

<script>
    export default {
        name: "footerFixed",
        data(){
            return{
                tabs:[
                    {
                        title: '走进舜瀛',
                        itemsTab: [
                            { name: '/enterEnterprise', hash: '#introduce', title: '企业介绍' },
                            { name: '/enterEnterprise', hash: '#speech', title: '董事长致辞' },
                            { name: '/enterEnterprise', hash: '#event', title: '公司大事记' },
                            { name: '/enterEnterprise', hash: '#organization', title: '组织架构' },
                            { name: '/enterEnterprise', hash: '#honor', title: '资质与荣誉' },
                            // { name: '/enterEnterprise', hash: '#culture', title: '企业文化' },
                        ]
                    },
                    {
                        title: '服务范围',
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
                        title: '成功案例',
                        itemsTab: [
                            { name: '/successCases', hash: '#financial', title: '金融系统' },
                            { name: '/successCases', hash: '#education', title: '教育系统' },
                            { name: '/successCases', hash: '#residential', title: '住宅系统' },
                            { name: '/successCases', hash: '#business', title: '商务大楼' },
                            { name: '/successCases', hash: '#industrial', title: '工业园区' },
                            { name: '/successCases', hash: '#public', title: '公众物业' },
                            { name: '/successCases', hash: '#convention', title: '会展物业' },
                        ]
                    },
                    {
                        title: '专业技能',
                        itemsTab: [
                            { name: '/professionalSkill', hash: '#management', title: '独特管理模式' },
                            { name: '/professionalSkill', hash: '#equipment', title: '专业设备' },
                            { name: '/professionalSkill', hash: '#jobs', title: '独特岗位培训' },
                            { name: '/professionalSkill', hash: '#operation', title: '操作规范' },
                        ]
                    },
                    {
                        title: '联系我们',
                        itemsTab: [
                            { name: '/contactUs', hash: '#contact', title: '联系方式' },
                            { name: '/contactUs', hash: '#message', title: '留言反馈' },
                            { name: '/talentRecruitment', hash: '#talent', title: '人才招聘' },
                        ]
                    },
                ]
            }
        },
        methods:{
         
            // eslint-disable-next-line no-unused-vars
            goTabs(name,hash){
                console.log(name,hash)
                this.$router.push({
                    path: name ,      //  或者可以写成  path: '/home'
                    query: {            //  这种参数不会带在地址栏上
                        hash:hash
                    }
                })
            }
        }
    };
</script>

<style scoped>
    .footer {
        width: 100%;
        /* position: fixed; */
        bottom: 0;
        left: 0;
        background: #130534;
        font-size: 16px;
        color: white;
        font-weight: 600;
    }

    .footer .content {
        height: 470px;
        width: 1200px;
        margin: 0 auto;
        display: flex;
        box-sizing: border-box;
        padding: 60px 0;
        justify-content: space-around;
        font-size: 12px;
        color: #d7d7d7;
    }

    .footer .content .tab_wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .footer .content .tab_wrap .logo_footer {
        width: 190px;
        height: 36px;
    }

    .footer .content .tab_wrap .phone_footer {
        width: 219px;
        height: 26px;
    }

    .footer .content .tab_wrap .code_footer {
        width: 80px;
        height: 80px;
    }

    .footer .content .tab_wrap .text_wrap {
        line-height: 30px;
    }

    .footer .content .title {
        font-size: 18px;
        color: white;
        line-height: 50px;
    }

    .footer .content .items {
        margin-bottom: 18px;
        cursor: pointer;
        display: block;
        color: #CFCFCF;
    }

    .footer .copy_right {
        height: 50px;
        line-height: 50px;
        width: 100%;
        padding-left: 360px;
        background: #381548;
        color: #bdbdbd;
        font-size: 13px;
        font-weight: 400;
    }
</style>
