<template>
    <div>
        <div class="project_wrap" v-for="(item,index) in list" :key="index" :id="item.hash">
            <div class="left" v-if="index%2 == 0">
                <img :src="item.img" alt="" class="project_img">
            </div>
            <div class="middle">
                <div class="en_text" :style="`font-size:${item.font}px`">{{item.en}}</div>
                <div class="title">{{item.title}}</div>
                <div class="line"></div>
                <div class="text_content">{{item.text}}</div>
            </div>
            <div class="right" v-if="index%2 == 1">
                <img :src="item.img" alt="" class="project_img">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "projectItems",
        props:{
            list:{
                type:Array,
            }
        }
    }
</script>

<style scoped lang="less">
    .project_wrap{
        padding-top: 120px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .left{
            background:#F8F8F8 ;
            padding: 60px 0;
            margin-right: 130px;
            .project_img{
                width: 620px;
                height: 380px;
                position: relative;
                left: 60px;
            }
        }
        .middle{
            .en_text{
                font-size:60px ;
                font-family: AlibabaPuHuiTiB;
                color: rgba(191, 191, 191, 0.21);
                font-weight: 600;
                position: relative;
                bottom: -30px;
                text-transform: uppercase
            }
            .title{
                font-size: 36px;
                font-weight: 600;
                color: #333333;
                margin-bottom: 28px;
                text-align: left;
            }
            .line{
                width: 70px;
                height: 3px;
                background: #7B2063;
                margin-bottom: 28px;
            }
            .text_content{
                font-size: 18px;
                font-weight: 400;
                color: #888888;
                line-height: 30px;

            }
        }
        .right{
            background:#F8F8F8 ;
            padding: 60px 0;
            margin-left: 130px;
            .project_img{
                width: 620px;
                height: 380px;
                position: relative;
                right: 60px;
            }
        }
    }

</style>
