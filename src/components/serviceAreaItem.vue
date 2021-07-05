<template>
    <div class="serviceAreaItem">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                    <img :src="item.img" alt="" class="banner_img">
                    <div class="title">
                        <div class="en_name">{{item.en}}</div>
                        <div class="name">{{item.title}}</div>
                        <div class="text">{{item.text}}</div>
                        <div class="more">
                            READ MORE
                            <img src="../assets/right_enter2.png" alt="" style="margin-left: 17px">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>


            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <!--    <div class="swiper-scrollbar"></div>-->
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "serviceAreaItem",
        data(){
            return{
                title:'',
                list:[
                    {en:"Cleaning services",title:'保洁服务',text:'坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户;' +
                            '预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。',img:require('../assets/service_banner_01.png')},
                    {en:"Cleaning services",title:'安保服务',text:'坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户;' +
                            '预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。',img:require('../assets/service_banner_02.png')},
                    {en:"Cleaning services",title:'绿化服务服务',text:'坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户;' +
                            '预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。',img:require('../assets/service_banner_03.png')},
                    {en:"Cleaning services",title:'工程维修',text:'坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户;' +
                            '预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。',img:require('../assets/service_banner_04.png')},
                    {en:"Cleaning services",title:'客户服务',text:'坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户;' +
                            '预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。',img:require('../assets/service_banner_05.png')},
                    {en:"Cleaning services",title:'租赁销售',text:'坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户;' +
                            '预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。',img:require('../assets/service_banner_06.png')},
                    {en:"Cleaning services",title:'家政服务',text:'坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户;' +
                            '预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。',img:require('../assets/service_banner_07.png')},
                    {en:"Cleaning services",title:'社区养老',text:'坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户;' +
                            '预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。',img:require('../assets/service_banner_08.png')},
                    {en:"Cleaning services",title:'幼托服务',text:'坚持以“规范管理、挚诚服务、不断进取、追求卓越”为质量方针，永远以最良好的形象和工作状态面对客户;' +
                            '预计客户的需求，迅速帮助客户解决问题并努力使客户满意；无微不至的关怀客户，并以实际行动让客户感动。',img:require('../assets/service_banner_09.png')},
                ]
            }
        },
        mounted(){
            new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 0,
                pagination: '.swiper-pagination',
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                // 如果需要滚动条
                // scrollbar: '.swiper-scrollbar',
                //如果需要自动切换海报
                // autoplay: {
                //   delay: 1000,//时间 毫秒
                //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
                // },
            })
        },
    }
</script>

<style lang="less">

    .serviceAreaItem .swiper-slide {
        text-align: center;
        background: #fff;
        height: 580px;
        /* Center slide text vertically */
        display: flex;
        width: 60%;
        font-size: 0;
    }
    .serviceAreaItem .swiper-slide-prev{
        flex-direction:row-reverse;
        opacity: 0.3;
    }
    .serviceAreaItem .swiper-slide-next{
        opacity: 0.3;
    }

    .serviceAreaItem .swiper-slide:nth-child(2n) {
        width: 60%;
    }
    .serviceAreaItem .swiper-slide .banner_img{
        width: 66.6666666%;
    }
    .serviceAreaItem .swiper-slide .title{
        width: 33.3333333%;
        display: flex;
        flex-direction:column ;
        box-sizing: border-box;
        padding: 60px 50px 0px 50px;
        justify-content: center;
        text-align: left;
        background: #F2F2F2;
        .en_name{
            font-size: 24px;
            color: #CCCCCC;
            margin-bottom: 20px;
        }
        .name{
            font-size: 32px;
            color: #333333;
            font-weight: 600;
            margin-bottom: 30px;
        }
        .text{
            font-size: 18px;
            font-weight: 400;
            color: #555555;line-height: 30px;
            margin-bottom: 53px;
        }
        .more{
            width: 180px;
            height: 60px;
            border: 1px solid #7B2063;
            font-weight: 600;
            color: #7B2063;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .serviceAreaItem .swiper-button-prev{
        left: 20%;
        background-image: url('../assets/carousel_left.png');
        background-size:60px 60px;
        width: 60px;
        height: 60px;
    }
    .serviceAreaItem .swiper-button-next{
        right: 40%;
        background-image: url('../assets/carousel_right.png');
        background-size:60px 60px;
        width: 60px;
        height: 60px;
    }
    .serviceAreaItem .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
        width: 80%;
    }
    .serviceAreaItem .swiper-pagination-bullet{
        background: white;
        width: 14px;
        height: 14px;
        margin-right: 16px;
        opacity: .9;
    }
    .serviceAreaItem .swiper-pagination-bullet-active{
        background: #7B2063;
        border: 1px solid #ffffff;
    }
</style>

