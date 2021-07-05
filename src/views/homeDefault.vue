<template>
  <div class="banner_group">
    <div class="home_banner">
      <el-carousel
        class="bannre_carousel"
        ref="videoCarousel"
        height="900px"
        :interval="9000"
        :autoplay="false"
        arrow="hover"
        @change="getIndex"
      >
        <el-carousel-item v-for="(item, index) in videos" :key="index">
          <!--视频播放器    @ended="videoNext"-->
          <video :ref="'videoPlayer' + index" :controls="true" muted>
            <source :src="item.src" type="video/mp4" />
            您的浏览器不支持Video标签。
          </video>
          <!-- <i
                            v-show="!isPlay"
                            class="play-btn el-icon-video-play"
                            @click="playVideo"
                          ></i>
                          <i
                            v-show="isPlay && isIn"
                            class="play-btn el-icon-video-pause"
                            @click="pauseVideo"
                          ></i> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="title_group">
      <div class="title">
        <span>服 务 业 主</span><span style="padding: 0 30px"></span
        ><span>追 求 完 美</span>
      </div>
      <div class="line"></div>
      <div class="p">
        <span>锐 意 创 新</span><span style="padding: 0 15px"></span
        ><span>管 理 规 范</span>
      </div>
    </div>
    <div class="home_about_us">
      <div>
        <LeftGroup
          style="margin: 0"
          :title="'ABOUT US'"
          :subTitle="'关于我们'"
        ></LeftGroup>
        <div class="line"></div>
        <p>
          上海舜瀛物业管理有限公司于2002年成立，注册资金5000万元，具有国家一级资质的民营企业。提供多元化物业服务，包括物业管理、楼宇保洁服务、外墙清洗及粉刷，绿化养护服务，楼宇设备的维护，水电维修等。经过不懈努力,我们通过ISO9001体系认证，并先后被评为
          “诚信企业”、 “信得过企业” 。
        </p>
        <div @click="toAboutUs" class="enter_btn">
          <p>READ MORE</p>
          <img src="../assets/right_enter.png" alt="" />
        </div>
      </div>
      <img src="../assets/home_about_us.png" alt="" />
    </div>
    <div class="line_group">
      <CenterGroup
        style="margin: 0"
        :title="'QUALITY SERVICES'"
        :subTitle="'服务范围'"
      ></CenterGroup>
      <div class="line"></div>
      <service-area-item></service-area-item>
    </div>
    <!--  -->
    <div class="line_group">
      <CenterGroup
        style="margin: 120px 0 0 0"
        :title="'DIGITAL MAMAGEMENT'"
        :subTitle="'数字化管理'"
      ></CenterGroup>
      <div class="line" style="margin-bottom: 0"></div>
      <img class="digita_bg" src="../assets/digital_management.png" alt="" />
    </div>
    <div class="honor2_container">
      <div class="line_group">
        <CenterGroup
          style="margin: 0"
          :title="'SUCCESSFUL CASES'"
          :subTitle="'成功案例'"
        ></CenterGroup>
        <div class="line"></div>
      </div>
      <div class="card_container">
        <div class="point point_left" @click="prev">
          <img src="../assets/carousel_left2.png" alt="" />
        </div>
        <div class="card_carousel">
          <el-carousel
            :autoplay="false"
            arrow="never"
            :interval="4000"
            :initial-index="cardIndex"
            ref="carousel"
            type="card"
            height="550px"
            @change="cardChange"
            indicator-position="none"
          >
            <el-carousel-item v-for="(item, index) in caseList" :key="index">
              <div
                :class="{ card_item: true, active: cardIndex == index }"
                style="text-align: center"
              >
                <img :src="item.src" />
                <div class="card_text" v-text="item.title"></div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="point point_left" @click="next">
          <img src="../assets/carousel_right2.png" alt="" />
        </div>
      </div>
      <div @click="toSuccessCases" class="enter_btn2">
        <p>READ MORE</p>
        <img src="../assets/right_enter2.png" alt="" />
      </div>
    </div>
    <!--  -->
    <div class="latest_news">
      <div class="line_group">
        <CenterGroup
          style="margin: 0"
          :title="'NEWS AND INFORMATION'"
          :subTitle="'最新动态'"
        ></CenterGroup>
        <div class="line" style="margin-bottom: 0"></div>
      </div>
      <div class="latest_container">
        <div class="latest_left">
          <img src="../assets/home_latest_news.png" alt="" />
          <h3>上海舜瀛物业管理有限公司高端家政培训开班仪式</h3>
          <p>
            2021年度上海舜瀛物业技能比武大赛于1月17日成功举办。本届比武大赛本着公正、公平、公开的原则，通过参赛人员随机抽签的方式进行…
          </p>
        </div>
        <div>
          <div
            class="latest_right"
            v-for="(item, index) in latestList"
            :key="index"
          >
            <div class="item_date">
              <h3 v-text="item.day"></h3>
              <p v-text="item.date"></p>
            </div>
            <div class="line"></div>
            <div class="item_info">
              <h3 v-text="item.title">关于疫情防控告客户书</h3>
              <p v-text="item.intr">
                2021年度上海舜瀛物业技能比武大赛于1月17日成功举办。本届比武大赛本着公正、公平、公开的原则，通过参赛人员随机抽签的方式进行…
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div @click="toNews" class="enter_btn2" style="margin-bottom: 150px">
      <p>READ MORE</p>
      <img src="../assets/right_enter2.png" alt="" />
    </div>
  </div>
</template>

<script>
import serviceAreaItem from "../components/serviceAreaItem";
import LeftGroup from "../components/LeftGroup";
import CenterGroup from "../components/CenterGroup";

export default {
  name: "homeDefault",
  data() {
    return {
      cardIndex: 0,
      autoplay: false, //是否自动切换
      isPlay: false, //播放状态
      isIn: false, //鼠标是否位于播放器内
      //   cutTime: 5000, //轮播时间，单位毫秒
      nowIndex: 0,
      caseList: [
        {
          title: "中国交通银行",
          src: require("../assets/home_case1.png"),
        },
        {
          title: "上海香溢花城",
          src: require("../assets/home_case2.png"),
        },
        {
          title: "浦东星河湾",
          src: require("../assets/home_case3.png"),
        },
      ],
      videos: [
        {
          src: require("../videos/1.mp4"),
          time: 5000,
        },
        {
          src: require("../videos/2.mp4"),
          time: 3000,
          // time: 24000,
        },
        {
          src: require("../videos/3.mp4"),
          time: 1000,
          // time: 27000,
        },
      ],

      latestList: [
        {
          day: "18",
          date: "2021-01",
          title: "关于疫情防控告客户书",
          intr:
            "2021年度上海舜瀛物业技能比武大赛于1月17日成功举办。本届比武大赛本着公正、公平、公开的原则，通过参赛人员随机抽签的方式进行…",
        },
        {
          day: "12",
          date: "2021-01",
          title: "不惧寒潮，传递温暖",
          intr:
            "2021年度上海舜瀛物业技能比武大赛于1月17日成功举办。本届比武大赛本着公正、公平、公开的原则，通过参赛人员随机抽签的方式进行…",
        },
        {
          day: "09",
          date: "2021-01",
          title: "以高端家政为媒 让品牌家政驻足",
          intr:
            "2021年度上海舜瀛物业技能比武大赛于1月17日成功举办。本届比武大赛本着公正、公平、公开的原则，通过参赛人员随机抽签的方式进行…",
        },
        {
          day: "07",
          date: "2021-01",
          title: "十五载砥砺感恩你我她——上海舜瀛物业…",
          intr:
            "2021年度上海舜瀛物业技能比武大赛于1月17日成功举办。本届比武大赛本着公正、公平、公开的原则，通过参赛人员随机抽签的方式进行…",
        },
      ],
    };
  },
  components: {
    LeftGroup,
    CenterGroup,
    serviceAreaItem,
  },
  mounted() {
    //初始监听第一个视频
    this.listenVideo();
    this.playVideo();
  },
  methods: {
    //获取走马灯的索引
    getIndex(nowIndex, oldIndex) {
      //用户可能在上个视频未播放完毕就切换
      //此时需要暂停上个视频并把时间归零，否则影响对当前视频的监听逻辑
      let myVideo = this.$refs["videoPlayer" + oldIndex];
      // console.log(myVideo[0].duration);
      myVideo[0].pause();
      myVideo[0].currentTime = 0;
      this.nowIndex = nowIndex;
      this.listenVideo();
      this.playVideo();
    },
    //监听视频的播放、暂停、播放完毕等事件
    listenVideo() {
      // 注意：这样获取的dom是一个数组，必须加上[0]索引才能正确的添加事件
      let myVideo = this.$refs["videoPlayer" + this.nowIndex];
      //监听播放
      myVideo[0].addEventListener("play", () => {
        this.autoplay = false;
        this.isPlay = true;
      });
      //监听暂停
      myVideo[0].addEventListener("pause", () => {
        this.autoplay = true;
        this.isPlay = false;
      });
      //监听播放完毕
      myVideo[0].addEventListener("ended", () => {
        //时间归零
        myVideo[0].currentTime = 0;
        this.$refs.videoCarousel.next();
        // this.autoplay = true;
        this.isPlay = false;
      });
    },
    // videoNext(e) {
    //   console.log({ e });
    //   this.$refs.videoCarousel.next();
    // },
    //播放视频
    playVideo() {
      //注意：这样获取的dom是一个数组，必须加上[0]索引才能正确的添加事件
      let myVideo = this.$refs["videoPlayer" + this.nowIndex];
      myVideo[0].play();
    },
    //暂停视频
    pauseVideo() {
      //注意：这样获取的dom是一个数组，必须加上[0]索引才能正确的添加事件
      let myVideo = this.$refs["videoPlayer" + this.nowIndex];
      myVideo[0].pause();
    },
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
    cardChange(index) {
      this.cardIndex = index;
    },
    toAboutUs() {
      this.pushTo("ContactUs");
    },
    toSuccessCases() {
      this.pushTo("SuccessCases");
    },
    toNews() {
      this.pushTo("NewsPage");
    },
  },
};
</script>

<style lang="less" scoped>
.show-imgs-container {
  height: 100%;
}

.home_banner .el-carousel {
  width: 100%;
  height: 100%;
}

.home_banner .el-carousel__container {
  width: 100%;
  height: 100%;
}

.home_banner .el-carousel__item {
  width: 100%;
  height: 100%;
  border-radius: 0;
}

video {
  width: 100%;
  min-width: 1920px;
  //   height: 100%;
  position: fixed;
  display: inline-block;
  vertical-align: baseline;
  object-fit: fill;
}

.play-btn {
  font-size: 60px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.banner_group {
  position: relative;
}

.banner_group .title_group {
  position: absolute;
  position: absolute;
  left: 50%;
  top: 262px;
  transform: translate(-50%, 0%);
  z-index: 2;
  color: #ffffff;
}

.title_group .title {
  font-size: 50px;
  text-align: center;
}

.title_group .line {
  width: 277px;
  height: 2px;
  background: #ffffff;
  margin: 30px auto;
}

.title_group .p {
  font-size: 32px;
  text-align: center;
}

.home_about_us {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 120px auto 150px auto;
  align-items: center;

  > img {
    width: 648px;
  }

  .line {
    width: 90px;
    height: 4px;
    background: #7b2063;
    margin: 30px 0;
  }

  p {
    width: 437px;
    line-height: 30px;
    font-size: 18px;
    color: #555555;
  }
}

.enter_btn {
  background: #7b2063;
  display: flex;
  width: 200px;
  margin: 30px 0;
  padding: 16px 26px;

  p {
    color: #ffffff;
  }

  img {
    display: block;
    width: 20px;
    margin-left: 16px;
  }
}

.line_group {
  .line {
    width: 90px;
    height: 4px;
    background: #7b2063;
    margin: 30px auto;
  }
}

.digita_bg {
  width: 100%;
  min-width: 1200px;
}

.honor2_container {
  background: #f8f8f8;
  padding: 100px 0;

  .carousel_group {
    // width: 1414px;
    margin: 0 auto;
  }

  .carousel_group {
    display: flex;
  }

  .honors {
    flex: 1;
  }

  .honor_group {
    margin: 0 auto;

    img {
      width: 370px;
    }
  }
}

.card_carousel {
  width: 1200px;
  margin: 0 auto;

  .card_item {
    width: 100%;

    img {
      width: 370px;
      display: block;
      margin: 0 auto;
    }

    .card_text {
      transition: background, box-shadow linear 0.4s;
      background: #ffffff;
      box-shadow: 0 20px 20px 0 rgba(123, 32, 99, 0);
      width: 370px;
      margin: 0 auto;
      line-height: 1;
      padding: 38px 0;
      font-size: 24px;
      font-weight: bold;
    }
  }

  .card_item.active {
    .card_text {
      background: #7b2063;
      color: #ffffff;
      box-shadow: 0 20px 20px 0 rgba(123, 32, 99, 0.3);
    }
  }
}

.card_container {
  width: 1320px;
  display: flex;
  align-items: center;
  margin: 0 auto;

  .point_left {
    img {
      width: 60px;
    }
  }
}

.enter_btn2 {
  cursor: pointer;
  margin: 0 auto;
  border: 1px solid #7b2063;
  width: 180px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;

  p {
    font-weight: bold;
    color: #7b2063;
  }
}

.latest_news {
  width: 1200px;
  margin: 0 auto;
  padding: 110px 0 60px 0;
}

.latest_container {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .latest_left {
    img {
      display: block;
      width: 530px;
    }

    h3 {
      font-size: 24px;
      line-height: 1;
      margin: 40px 0 26px 0;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      width: 530px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

.latest_right {
  display: flex;
  align-items: flex-start;
  margin-bottom: 44px;

  .item_date {
    h3 {
      font-size: 36px;
      color: #7b2063;
      text-align: right;
      font-weight: bold;
    }

    p {
      font-size: 16px;
    }
  }

  .line {
    width: 1px;
    height: 80px;
    background: #d3d3d3;
    margin: 0 20px;
  }

  .item_info {
    h3 {
      line-height: 1;
      margin-bottom: 14px;
      font-weight: bold;
    }

    p {
      width: 470px;
      font-size: 14px;
      line-height: 21px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: #555555;
    }
  }
}
</style>
