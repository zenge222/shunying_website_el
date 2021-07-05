<template>
    <div class="contact">
        <div class="banner">
            <img src="../assets/contact_us.png" alt="" class="service_bg">
        </div>
        <div class="content" id="contact">
            <div class="title">联系我们</div>
            <div class="en_title">Contact us</div>
            <div class="name">上海舜瀛物业管理有限公司</div>
            <div class="tabs">
                <div :class="{tabs_item:true,item_three:index%3==2}" v-for="(item,index) in tabs" :key="index">
                    <img :src="item.icon" alt="" class="icon">
                    <div class="title">{{item.title}}</div>
                    <div class="phone" v-if="item.phone">{{item.phone}}</div>
                    <div class="phone" v-if="item.tel">{{item.tel}}</div>
                    <div class="address" v-if="item.address">{{item.address}}</div>
                </div>
            </div>
            <div class="feed_back" id="message">
                留言反馈
            </div>
            <el-row :gutter="36">
                <el-col :span="8">
                    <el-input placeholder="姓名" v-model="addForm.name"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-input placeholder="手机号码" v-model="addForm.phone"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-input type="email" placeholder="电子邮箱" v-model="addForm.email"></el-input>
                </el-col>
            </el-row>
            <el-row style="margin-top:40px ">
                <el-col :span="24">
                    <el-input v-model="addForm.content" type="textarea" placeholder="您反馈的信息" :autosize="{ minRows:10, maxRows: 10 }"></el-input>
                </el-col>
                <el-col :span="24" align="center" style="margin-top: 40px">
                    <button class="feed_back_btn submit" @click="submit">提交信息</button>
                    <button class="feed_back_btn">重置</button>
                </el-col>
            </el-row>
        </div>
        <el-row>
            <div id="map" style="height: 400px"></div>
        </el-row>
    </div>
</template>

<script>
    import maps from "qqmap";
    export default {
        name: "contactUs",
        components: {},
        data(){
            return{
                tabs:[
                    {title:"热线电话",icon:require('../assets/hot_line.png'),phone:"021-61679549",tel:"",address:''},
                    {title:"业务咨询",icon:require('../assets/ask_project.png'),phone:"021-61679549-804",tel:"",address:''},
                    {title:"售后",icon:require('../assets/after_sales.png'),phone:"021-61679549-805",tel:"15201785520",address:''},
                    {title:"公司地址",icon:require('../assets/company_address.png'),phone:"",tel:"",address:'上海市闵行区程家桥路258号\n' +
                            '银洲国际大厦A座606室'},
                    {title:"公司网址",icon:require('../assets/web_address.png'),phone:"",tel:"",address:'www.shunyingwuye.com'},
                    {title:"传真",icon:require('../assets/send_address.png'),phone:"021-61738188",tel:"",address:''},
                ],
                addForm:{
                    name:'',
                    phone:'',
                    email:"",
                    content:''
                },
                longitude: "",
                latitude: ""
            }
        },
        mounted() {
            this.init();
        },
        methods:{
            submit(){
                if(!this.addForm.name||!this.addForm.phone||!this.addForm.content){
                    this.$message.error('请填写完整的反馈信息和联系信息！')
                    return
                }
                this.$message({type:'success',message:'提交成功!'})
            },
            init() {
                let that = this
                maps.init("D5OBZ-24A6F-2LNJZ-NLPJ6-TW6VE-M7FJ5", () => {
                    // eslint-disable-next-line no-undef
                    let center = new qq.maps.LatLng(31.184826,121.375207);
                    // eslint-disable-next-line no-undef,no-unused-vars
                    // eslint-disable-next-line no-undef
                    that.map = new qq.maps.Map(
                        window.document.getElementById("map"),
                        {
                            center: center,
                            zoom: 20,
                            disableDoubleClickZoom: true,
                            // eslint-disable-next-line no-undef
                            mapTypeId: qq.maps.MapTypeId.ROADMAP
                        });
                    // eslint-disable-next-line no-unused-vars,no-undef
                    let marker = new qq.maps.Marker({
                        map: that.map,
                        position: center
                    });
                })
            }
        }
    };
</script>

<style scoped lang="less">
    .contact {
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
            .name{
                font-size: 24px;
                text-align: center;
                margin-bottom: 80px;
            }
            .feed_back_btn{
                width: 172px;
                height: 50px;
                line-height: 50px;
                margin-right:30px ;
                border-radius: 4px;
                border: 1px solid #7b2063;
                background: white;
                font-size: 18px;
                font-weight: 600;
                color: #7b2063;
                cursor: pointer;
            }
            .submit{
                background:#7b2063 ;
                color: white;
            }
        }
        .tabs{
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 180px;
            .tabs_item{
                width: 375px;
                height: 230px;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid #D1D1D1;
                padding-top: 26px;
                margin-right:36px ;
                margin-bottom: 36px;
                box-sizing: border-box;
                .icon{
                    width: 54px;
                    margin-bottom: 20px;
                }
                .title{
                    font-size: 24px;
                    color: #333333;
                    font-weight: 600;
                    margin-bottom: 21px;
                }
                .phone{
                    font-size: 18px;
                }
                .address{
                    font-size: 16px;
                    color: #333333;
                    width: 260px;
                    text-align: center;
                }
            }
            .item_three{
                margin-right: 0;
            }
        }
        .feed_back{
            text-align: center;
            font-size: 36px;
            margin-bottom: 60px;
        }
    }
</style>
