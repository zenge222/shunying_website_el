<template>
    <div class="successCases">
        <div class="banner">
            <img src="../assets/success_bg.png" alt="" class="service_bg">
        </div>
        <div class="content" :id="id">
            <div class="title">成功案例</div>
            <div class="en_title">Successful cases</div>
            <div class="tabs">
                <div v-for="(item,index) in tabs" :key="index" :class="{item:true,active:hash == item.hash}"
                     @click="changTabs(item.hash,item.name)">{{item.name}}
                </div>
            </div>
            <div class="case_wrap">
                <div :class="{case_item:true,case_item_three:index%3==2}" v-for="(item,index) in tableData"
                     :key="index">
                    <div class="case_content">
                        <img :src="item.img" alt="" class="img_png">
                        <div class="name">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </div>
        <pagination
                style="text-align: center"
                :total="total"
                :limit="10"
                :page="1"
        />
    </div>
</template>

<script>
    import pagination from '../components/Pagination'

    export default {
        name: "SuccessCases",
        components: {pagination},
        data() {
            return {
                id:'',
                hash: this.$route.query.hash||'all',
                total: 1,
                activeIndex: 0,
                tabs: [
                    {name: "全部", hash: 'all',},
                    {name: "金融系统", hash: '#financial',},
                    {name: "教育系统", hash: '#education',},
                    {name: "住宅系统", hash: '#residential',},
                    {name: "商务大楼", hash: '#business',},
                    {name: "工业园区", hash: '#industrial',},
                    {name: "公众物业", hash: '#public',},
                    {name: "会展物业", hash: '#convention',},
                ],
                arr:[
                    {
                        name: '全部',
                        list:[
                            {title: '交通银行', img: require('../assets/jiaotong_bank.png')},
                            {title: '招商银行', img: require('../assets/zhaoshang_bank.png')},
                            {title: '东华大学', img: require('../assets/donghua.png')},
                            {title: '精锐教育', img: require('../assets/jingrui.png')},
                            {title: '同济大学', img: require('../assets/tongji.png')},
                            {title: '华润上海滩花园', img: require('../assets/shanghaitan.png')},
                            {title: '华润中央公园', img: require('../assets/huarunzhongyang.png')},
                            {title: '尙江豪庭', img: require('../assets/shangjiang.png')},
                            {title: '交通银行总行', img: require('../assets/jiaotong_all_bank.png')},
                            {title: '常熟延锋', img: require('../assets/changshu.png')},
                            {title: '匡巷一村', img: require('../assets/kuangxiang.png')},
                            {title: '德宝', img: require('../assets/debao.png')},
                            {title: '东风悦达', img: require('../assets/dongfengyueda.png')},
                        ]
                    },
                    {name:'金融系统',
                        list:[
                            {title: '交通银行', img: require('../assets/jiaotong_bank.png')},
                            {title: '招商银行', img: require('../assets/zhaoshang_bank.png')},
                        ]
                    },
                    {name:'教育系统',
                        list:[
                            {title: '东华大学', img: require('../assets/donghua.png')},
                            {title: '精锐教育', img: require('../assets/jingrui.png')},
                            {title: '同济大学', img: require('../assets/tongji.png')},
                        ]
                    },
                    {name:'住宅系统',
                        list:[
                            {title: '华润上海滩花园', img: require('../assets/shanghaitan.png')},
                            {title: '华润中央公园', img: require('../assets/huarunzhongyang.png')},
                            {title: '尙江豪庭', img: require('../assets/shangjiang.png')},
                        ]
                    },
                    {name:'商务大楼',
                        list:[
                            {title: '交通银行总行', img: require('../assets/jiaotong_all_bank.png')},
                        ]
                    },
                    {name:'工业园区',
                        list:[
                            {title: '常熟延锋', img: require('../assets/changshu.png')},
                            // {title: '匡巷一村', img: require('../assets/kuangxiang.png')},
                        ]
                    },
                    {name:'公众物业',
                        list:[
                            {title: '匡巷一村', img: require('../assets/kuangxiang.png')},
                        ]
                    },
                    {name:'会展物业',
                        list:[
                            {title: '德宝', img: require('../assets/debao.png')},
                            {title: '东风悦达', img: require('../assets/dongfengyueda.png')},
                        ]
                    },
                ],
                tableData: [
                    {title: '交通银行', img: require('../assets/jiaotong_bank.png')},
                    {title: '招商银行', img: require('../assets/zhaoshang_bank.png')},
                    {title: '东华大学', img: require('../assets/donghua.png')},
                    {title: '精锐教育', img: require('../assets/jingrui.png')},
                    {title: '同济大学', img: require('../assets/tongji.png')},
                    {title: '华润上海滩花园', img: require('../assets/shanghaitan.png')},
                    {title: '华润中央公园', img: require('../assets/huarunzhongyang.png')},
                    {title: '尙江豪庭', img: require('../assets/shangjiang.png')},
                    {title: '交通银行总行', img: require('../assets/jiaotong_all_bank.png')},
                    {title: '常熟延锋', img: require('../assets/changshu.png')},
                    {title: '匡巷一村', img: require('../assets/kuangxiang.png')},
                    {title: '德宝', img: require('../assets/debao.png')},
                    {title: '东风悦达', img: require('../assets/dongfengyueda.png')},
                ]
            }
        },
        watch:{
            $route: {
                // eslint-disable-next-line no-unused-vars
                handler: function(val, oldVal){
                    // console.log(val,oldVal);
                    if(val.query.hash){
                        this.hash = val.query.hash
                        this.id = val.query.hash.replace('#','')
                    }else {
                        this.hash = 'all'
                    }
                },
                // 深度观察监听
                deep: true
            }
        },
        mounted() {
            // console.log(this.$route.query.hash)
            if(!this.$route.query.hash){
                this.hash = 'all'
            }
        },
        methods: {
            changTabs(hash,name) {
                this.hash = hash
                this.tableData = this.arr.find(item=>item.name == name).list
            }
        }
    };
</script>

<style scoped lang="less">
    .successCases {
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
                    width: 136px;
                    height: 60px;
                    line-height: 60px;
                    font-size: 18px;
                    border: 1px solid #333333;
                    text-align: center;
                    cursor: pointer;
                    margin-right: 16px;
                    &:hover {
                        background: #7b2063;
                        color: white;
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                }
                .active {
                    background: #7b2063;
                    color: white;
                }
            }
            .case_wrap {
                display: flex;
                flex-wrap: wrap;
                .case_item {
                    background: #F2F2F2;
                    margin-bottom: 80px;
                    margin-right: 45px;
                    font-size: 0;
                    cursor: pointer;
                    color: #333333;
                    .img_png {
                        width: 370px;
                        height: 370px;
                    }
                    .name {
                        font-size: 24px;

                        line-height: 100px;
                        text-align: center;
                        font-weight: 600;
                    }
                    &:hover .case_content {
                        background: #7b2063;
                        color: white;
                        box-shadow: 0px 20px 20px 0px rgba(123, 32, 99, 0.3);
                        transform: scale(1.01);
                        transition: all .2s;
                    }
                }
                .case_item_three {
                    margin-right: 0;
                }
            }
        }
    }
</style>
