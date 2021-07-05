<template>
    <div :class="{ header: true, header_menu2: headerChange }">
        <div class="content">
            <div class="logo">
                <img src="../assets/logo@2x.png" alt="" class="logo_png"/>
            </div>
            <div @click="jumpTo(item, index)" v-for="(item, index) in tabList" :key="index"
                 :class="{ home: true, active: $route.name == item.name }">
                <span style="font-weight: 600">{{item.title}}</span>
                <div class="sub_tab" v-if="item.tabs">
                    <div class="item_tabs">
                        <img :src="item.img" alt="" class="service_png">
                        <div class="item_tabs_wrap" v-for="(itemTabs,tabIndex) in item.tabs" :key="tabIndex">
                            <div class="title">{{itemTabs.title}}</div>
                            <div style="display: flex;flex-wrap: wrap;">
                                <div class="item_url" v-for="(tab,itemTabIndex) in itemTabs.itemsTab" :key="itemTabIndex" @click="goTabs(tab,tabIndex)">
                                    <i class="el-icon-arrow-right"></i><a :href="tab.hash" :class="{active_url: hash == tab.hash}">{{tab.title}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="phone">
                <img src="../assets/tel.png" alt="" class="tel_png"/>
            </div>
        </div>
        <a href="#" class="back_top" v-if="scrollTop>200">
            <img src="../assets/back_top.png" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        name: "headerFixed",
        data() {
            return {
                tabList: [],
                scrollTop: 0,
                headerChange: false,
                hash:'00000000000000'
            };
        },
        watch: {
            scrollTop: function (newVal) {
                if (newVal >= 80) {
                    this.headerChange = true;
                } else {
                    this.headerChange = false;
                }
            },
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
            this.tabList = this.filterTabs();
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        },
        methods: {
            filterTabs() {
                const res = [];
                const routes = this.$router.options.routes[0].children;
                routes.forEach((val) => {
                    let obj = {};
                    obj.title = val.meta.title;
                    obj.name = val.name;
                    obj.tabs = val.meta.tabs
                    obj.img = val.meta.img
                    if (!val.hidden) {
                        res.push(obj);
                    }
                });
                return res;
            },
            jumpTo(item) {
                this.pushTo(item.name);
                // console.log(item.name)
                // console.log(this.$route)
                // this.activeIndex = index
            },
            goTabs(item,index){
                if(index ==0){
                    window.localStorage.setItem('serviceIndex','1')
                }else {
                    window.localStorage.setItem('serviceIndex','2')
                }
                this.pushTo(item.name);
                this.hash = item.hash
            },
            handleScroll() {
                this.scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
            },
        },
    };
</script>

<style scoped>
    .header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.4);
        font-size: 16px;
        color: #333333;
        font-weight: 600;
        z-index: 99;
        transition: background linear 0.4s;
    }
    .header .back_top{
        position: fixed;
        bottom: 80px;
        right: 80px;
        z-index: 999;
    }
    .header .back_top>img{
        width: 50px;
    }
    .header .content {
        width: 100%;
        display: flex;
        height: 80px;
        line-height: 80px;
        min-width: 1360px;
    }

    .header .content .logo {
        flex: 4;
    }

    .header .content .logo .logo_png {
        width: 190px;
        height: 36px;
        position: relative;
        top: 12px;
        left: 60px;
    }

    .header .content .home {
        padding: 0 25px;
        background: transparent;
        cursor: pointer;
        position: relative;
        font-weight: 600;
    }


    .header .content .home .sub_tab {
        width: 100%;
        background: white;
        position: fixed;
        left: 0;
        top:80px;
        height: 0;
        transition: all 0.2s;
        overflow: hidden;
    }

    .header .content .home:hover {
        background: #7b2063;
        color: #ffffff;
    }
    .header .content .home:hover .sub_tab{
        height:280px;
        padding-top: 45px;
        box-sizing: border-box;
    }
    .header .content .home .sub_tab .item_tabs{
        width: 1200px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }
    .header .content .home .sub_tab .item_tabs .item_tabs_wrap{
        width: 340px;
        color:#313131;
        font-size: 12px;
    }
    .header .content .home .sub_tab .item_tabs .item_tabs_wrap .title{
        color: #333333;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        margin-bottom: 30px;
    }
    .header .content .home .sub_tab .item_tabs .item_tabs_wrap .item_url{
        line-height: 0;
        width: 103px;
        margin-bottom: 30px;
    }
    .header .content .home .sub_tab .item_tabs .item_tabs_wrap .item_url>a{
        color: #333333;
    }
    .header .content .home .sub_tab .item_tabs .item_tabs_wrap .item_url .active_url{
        color: #570642!important;
        font-weight: 600!important;
    }
    .header .content .home .sub_tab .item_tabs .item_tabs_wrap .item_url:hover>a{
        color: #570642;
        font-weight: 600;
    }
    .header .content .home .sub_tab .item_tabs .service_png{
        width: 300px;
        height: 190px;
    }
    .header .content .home .sub_tab .item_tabs  .no_img{
        display: none;
    }
    .header .content .active {
        background: #7b2063;
        color: #ffffff;
    }

    .header .content .phone {
        flex: 2;
        text-align: center;
    }

    .header .content .phone .tel_png {
        width: 140px;
        height: 20px;
        position: relative;
        top: 5px;
        left: 15px;
    }

    .header_menu2 {
        background: #fff;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
    }
</style>
