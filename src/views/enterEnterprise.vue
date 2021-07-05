<template>
  <div class="newsPage">
    <div class="banner">
      <img src="../assets/enter_banner_bg.png" alt="" />
    </div>
    <!--  -->
    <div class="enter_container">
      <div class="title_group1">
        <h3 id="introduce">走进舜瀛</h3>
        <p>INTO THE SHUN YING</p>
      </div>
      <CenterGroup :title="'ABOUT US'" :subTitle="'企业介绍'"></CenterGroup>
      <div class="text_p">
        <p>
          上海舜瀛物业管理有限公司于2002年成立，注册资金5000万元，具有国家一级资质的民营企业。提供多元化物业服务，包括物业管理、楼宇保洁服务、外墙清洗及粉刷，绿化养护服务，楼宇设备的维护，水电维修等。
        </p>
        <p style="margin: 20px 0">
          经过不懈努力,我们通过ISO9001体系认证，并先后被评为 “诚信企业”、
          “信得过企业” 、“文明单位”、“上海世博会合作单位”。
        </p>
        <p>
          我们不仅荣获了社会荣誉，还通过国家清洁行业的一级资质，在保洁行业越走越远。
        </p>
      </div>
      <div class="info_group">
        <div class="info_item" v-for="(item, index) in countList" :key="index">
          <img :src="item.img" alt="" />
          <div class="content">
            <countTo
              class="count"
              :startVal="0"
              :separator="''"
              :endVal="item.count"
              :duration="5000"
            ></countTo>
            <p v-text="item.title"></p>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="speech_container" id="speech">
      <div class="speech_group">
        <div class="speech_left">
          <LeftGroup
            :title="'Chairman' + '\'' + 's speech'"
            :subTitle="'董事长致辞'"
          ></LeftGroup>
          <p>
            热烈欢迎您浏览上海舜瀛物业管理有限公司网站！网站是企业的窗口，亦是朋友打开舜瀛公司一扇信息之窗；让您们更多的了解我们、关注我们；通过这扇“窗”与各界朋友精诚合作、共创辉煌！
          </p>
          <p>
            上海舜瀛物业管理有限公司是一家全方位提供物业托管、保安、保洁服务、小区绿化等专业服务公司，并通过创新的前沿科技打造智慧管家平台，以互联网+、高科技两翼齐飞的方式赋能业务的开展，让我们的客户可以体验到更高质量、更高效率的定制化服务。坚持以“服务客户、追求完美、锐意创新、管理规范”为目标，为客户创造一个安全、舒适、宁静、优美的环境。公司拥有进口的清洗设备和专业的工程技术人员，运用先进的清洁技术，并采用日本管理模式。在主体市场开发的区域划分、技术劳务人员的专业培训、工艺流程的监督控制、以及工程质量的验收、把关等环节上，制定一套完备的激励和制约体制。同时，通过云平台、人工智能、物联网、大数据的领先科技提升服务品质、增强安全管理、甚至帮助客户搭建自有的私域市场营销体系，响应国家数字化转型、科技赋能的战略要求。充分体现了“正正规规办企业，踏踏实实干事业”的企业精神和“以人为本”、“创新为要”的服务理念。
          </p>
          <p>
            我衷心希望通过“企业官网”这个平台，为企业与客户朋友真正搭建一座沟通交流的桥梁，为各位客户朋友提供最新行业资讯、专业服务、科技发展等方面的信息。企业网站也力求逐步完善和创新，为从事物业管理的朋友提供更完善的信息平台。努力将公司网站建设成为交流的窗口、友谊的纽带、合作的桥梁。
          </p>
          <p>
            尊敬的各位朋友：因为有您的关注，我们的事业变得更重要；因为有您的支持，我们的事业得以不断壮大。发展之路，任重道远，我们愿与各界朋友携手共进，共创灿烂美好的明天！
          </p>
          <p>谢谢大家！</p>
        </div>
        <div class="speech_right">
          <img src="../assets/boss.png" alt="" />
          <p>张丽 董事长</p>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="event_container" id="event">
      <div class="event_group">
        <div>
          <LeftGroup
            :title="'COMPANY EVENTS'"
            :subTitle="'公司大事记'"
          ></LeftGroup>
          <GeminiScrollbar class="my-scroll-bar">
            <div class="scroll_group">
              <div class="event_list">
                <div
                  class="event_item"
                  v-for="(item, index) in eventList"
                  :key="index"
                >
                  <div class="right_event">
                    <div class="add_line">
                      <div class="decorate1"></div>
                      <div class="line"></div>
                    </div>
                    <img
                      class="decorate2"
                      src="../assets/point_right.png"
                      alt=""
                    />
                    <div class="date_time" v-text="item.date"></div>
                  </div>
                  <div class="enent_title">
                    <h3 v-text="item.title"></h3>
                    <p v-text="item.subTitle"></p>
                  </div>
                </div>
              </div>
            </div>
          </GeminiScrollbar>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="framework_container" id="organization">
      <div class="framework_group">
        <CenterGroup
          :size1="'36px'"
          :size2="'36px'"
          :color1="'rgba(255, 255, 255, 0.36)'"
          :color2="'#ffffff'"
          :title="'ORGANIZATIONAL STRUCTURE'"
          :subTitle="'组织架构'"
        ></CenterGroup>
        <img src="../assets/framework_img.png" alt="" />
      </div>
    </div>
    <!--  -->
    <div class="bg_container" id="honor">
      <div class="honor_container">
        <CenterGroup
          :size1="'36px'"
          :size2="'36px'"
          :title="'QUALIFICATIONS AND HONORS'"
          :subTitle="'资质与荣誉'"
        ></CenterGroup>
        <div class="carousel_group">
          <div class="point point_left" @click="prev">
            <img src="../assets/carousel_left.png" alt="" />
          </div>
          <div class="honors">
            <el-carousel
              ref="carousel"
              arrow="never"
              :autoplay="false"
              indicator-position="outside"
              height="500px"
              width="1164px"
            >
              <el-carousel-item v-for="item in 4" :key="item">
                <div class="honor_group">
                  <el-row :gutter="24">
                    <el-col :span="8">
                      <img src="../assets/honor1.png" alt="" />
                    </el-col>
                    <el-col :span="8">
                      <img src="../assets/honor2.png" alt="" />
                    </el-col>
                    <el-col :span="8">
                      <img src="../assets/honor3.png" alt="" />
                    </el-col>
                    <el-col :span="8">
                      <img src="../assets/honor4.png" alt="" />
                    </el-col>
                    <el-col :span="8">
                      <img src="../assets/honor5.png" alt="" />
                    </el-col>
                    <el-col :span="8">
                      <img src="../assets/honor6.png" alt="" />
                    </el-col>
                  </el-row>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="point point_right" @click="next">
            <img src="../assets/carousel_right.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterGroup from "../components/CenterGroup";
import LeftGroup from "../components/LeftGroup";
import countTo from "vue-count-to";
export default {
  name: "EnterEnterprise",
  data() {
    return {
      countList: [
        {
          title: "公司成立于2002年",
          count: 2002,
          img: require("../assets/count_bg1.png"),
        },
        {
          title: "中国物业服务企业500强第45位",
          count: 45,
          img: require("../assets/count_bg2.png"),
        },
        {
          title: "覆盖12个省份",
          count: 12,
          img: require("../assets/count_bg3.png"),
        },
        {
          title: "服务1297个客户",
          count: 1297,
          img: require("../assets/count_bg4.png"),
        },
      ],
      eventList: [
        {
          date: "2021.04",
          title: "文明单位”荣誉证书",
          subTitle: "2019-2020年度上海市绿化和市容管理局文明单位",
        },
        {
          date: "2020.12",
          title: "董事长任商业企业管理协会理事会理事",
          subTitle: "张丽任中国商业企业管理协会第七届理事会理事",
        },
        {
          date: "2020.12",
          title: "获2020年中国清洁服务百强企业",
          subTitle: "获中国商业企业管理协会2020年中国清洁服务百强企业",
        },
        {
          date: "2020.12",
          title: "董事长被授流通产业十大经济人物荣誉称号",
          subTitle: "张丽被授予“第十一届中国流通产业十大经济人物荣誉称号”",
        },
        {
          date: "2020.05",
          title: "上海市守合同重信用企业",
          subTitle: "2018-2019年度合同信用等级为AAA级",
        },
        {
          date: "2019.06",
          title: "成立北京分公司",
          subTitle: "成立上海舜瀛物业管理有限公司北京分公司",
        },
        {
          date: "2018.06",
          title: "上海市建筑构物内保洁一级能力证书",
          subTitle: "上海市保洁企业能力等级证书",
        },
        {
          date: "2017.11",
          title: "年度清洗保洁服务品牌企业大奖",
          subTitle: "第七届中国清洁行业品牌盛会",
        },
        {
          date: "2016",
          title: "第八届中国清洁行业优秀企业奖",
          subTitle: "中国中小商业企业协会清洁行业分会",
        },
        {
          date: "2015.09",
          title: "中国清洁清洗行业等级资质国家一级",
          subTitle: "全国清洁清洗行业资质评定委员会",
        },
        {
          date: "2015.02",
          title: "中国物业服务企业资质证书",
          subTitle: "上海市住房保障和房屋管理局",
        },
        {
          date: "2014.03",
          title: "公司通过ISO9001：2015质量管理体系",
          subTitle: "公司通过ISO9001：2015质量管理体系",
        },
        {
          date: "2009.05",
          title: "“文明单位”荣誉证书",
          subTitle: "2007-2008年度上海市绿化和市容管理局文明单位",
        },
        {
          date: "2008",
          title: "诚信企业",
          subTitle: "上海市企业诚信创建活动组委会/上海市市容环境卫生协会",
        },
        {
          date: "2002.02",
          title: "公司创建",
          subTitle: "前身是上海舜瀛实业有限公司",
        },
      ],
    };
  },
  components: {
    CenterGroup,
    LeftGroup,
    countTo,
  },
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
  },
};
</script>

<style lang="less" scoped>
.banner img {
  width: 100%;
  min-width: 1200px;
  display: block;
}
.enter_container {
  width: 1200px;
  margin: 0 auto;
}
.title_group1 {
  margin: 80px 0;
}
.title_group1 h3 {
  font-size: 48px;
  text-align: center;
  line-height: 1;
  padding-bottom: 20px;
  font-weight: bold;
}
.title_group1 p {
  line-height: 1;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
}
.text_p {
  font-size: 18px;
  color: #666666;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 70px;
}

.info_group .info_item {
  flex: 1;
  text-align: center;
  position: relative;
}
.info_item .count {
  font-size: 48px;
  color: #7b2063;
  font-weight: bold;
}
.info_item img {
  width: 100%;
  display: block;
}
.info_item .content {
  width: 100%;
  transform: translate(0, -50%);
  position: absolute;
  top: 50%;
}
.content p {
  font-size: 16px;
}
.info_group {
  display: flex;
  margin-bottom: 80px;
}
.speech_container {
  padding-top: 80px;
  width: 100%;
  height: 800px;
  background: url("../assets/speech_bg.png") no-repeat;
  background-size: 1920px 800px;
}
.speech_group {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.speech_right img {
  width: 400px;
}
.speech_right p {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding-top: 20px;
}
.speech_left {
  width: 700px;
}
.speech_left > p {
  font-size: 16px;
  line-height: 26px;
  color: #666666;
  text-indent: 32px;
}
.my-scroll-bar {
  width: 600px !important;
  height: 450px !important;
  /* overflow-x: hidden !important; */
}
.event_container {
  padding-top: 100px;
  width: 100%;
  padding-bottom: 35px;
  background: url("../assets/evemt_bg.png") no-repeat;
  background-size: 1920px 800px;
}
.event_group {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}
.scroll_group {
  position: relative;
}
.scroll_group .line {
  position: absolute;
  left: 10px;
  margin-top: 20px;
  width: 1px;
  background: #d0d0d0;
  height: 550px;
}
.add_line {
  position: relative;
}
.add_line .line {
  width: 1px;
  background: #d0d0d0;
  height: 100px;
  margin: 0;
}
.scroll_group .event_list {
  position: absolute;
  left: 0px;
  top: 0;
}
.event_item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 42px;
}
.right_event {
  display: flex;
  align-items: center;
}
.event_item .decorate1 {
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 100%;
  border: 3px solid #cecece;
}
.event_item .decorate2 {
  width: 16px;
  height: 16px;
  display: block;
  margin: 0 16px 0 5px;
}
.event_item .date_time {
  width: 80px;
  font-size: 24px;
  color: #999999;
  margin-right: 22px;
}
.enent_title h3 {
  font-size: 20px;
  color: #555555;
  line-height: 1;
  margin-bottom: 10px;
}
.enent_title p {
  font-size: 16px;
  color: #666666;
}
.framework_container {
  padding-top: 120px;
  width: 100%;
  height: 750px;
  background: url("../assets/framework_bg.png") no-repeat;
  background-size: 1920px 800px;
}
.framework_group {
  width: 1200px;
  margin: 0 auto;
}
.framework_group img {
  width: 1220px;
  display: block;
}
.honor_container {
  width: 1414px;
  margin: 0 auto;
  padding: 100px 0 130px 0;
}
.honors {
  width: 1164px;
  margin: 0 auto;
}
.honor_group img {
  width: 340px;
  display: block;
  margin: 0 auto 15px auto;
}
.carousel_group {
  display: flex;
  align-items: center;
}
.carousel_group .point > img {
  width: 60px;
  cursor: pointer;
}
.bg_container {
  width: 100%;
  height: 922px;
  background: url("../assets/honor_bg.png") no-repeat;
  background-size: 1920px 800px;
}
</style>
