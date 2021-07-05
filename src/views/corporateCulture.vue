<template>
  <div class="corporateCulture">
    <div class="banner">
      <img src="../assets/corporateCulture_banner.png" alt="" />
    </div>
    <div class="enterprise_culture">
      <h3>企业文化</h3>
      <p>ENTERPRISE CULTURE</p>
    </div>
    <CenterGroup
      :size1="'48px'"
      :size2="'36px'"
      :title="'CORPORATE MISSION'"
      :subTitle="'企业使命'"
    ></CenterGroup>
    <p class="enterprise_intr">
      在市场经济体制条件下，为体现我们的竞争优势，公司实施日式管理模式，引进了进口的清洗设备和专业的工程技术人才，运用先进的清洁技术。
      在主体市场开发的区域划分、技术劳务人员的专业培训、工艺流程的监督控制、以及工程质量的验收、把关等环节上制定了一套完备的激励和制约体制。
    </p>
    <CenterGroup
      :size1="'48px'"
      :size2="'36px'"
      :title="'BUSINESS PHILOSOPHY'"
      :subTitle="'经营理念'"
    ></CenterGroup>
    <p class="enterprise_intr" style="margin-bottom: 0">
      公司以“质量求生存，价格为优势，环保型服务”的经营理念为基础。
    </p>
    <p class="enterprise_intr">
      确立了“正正规规办企业，踏踏实实干事业”的企业精神，坚持“以人为本”和“以爱为本”的服务理念。
    </p>
    <!--  -->
    <div class="idea_container">
      <div class="idea_item">
        <div class="left"></div>
        <div class="right">
          <h3>尊重人性</h3>
          <div class="line"></div>
          <p>企业以人为本、促进企业与个人的共同发展</p>
        </div>
      </div>
      <div class="idea_item">
        <div class="left"></div>
        <div class="right">
          <h3>身体力行</h3>
          <div class="line"></div>
          <p>提倡高效、务实的工作作风</p>
        </div>
      </div>
      <div class="idea_item">
        <div class="left"></div>
        <div class="right">
          <h3>至诚至爱</h3>
          <div class="line"></div>
          <p>至诚至爱</p>
        </div>
      </div>
      <div class="idea_item">
        <div class="left"></div>
        <div class="right">
          <h3>敢超时代</h3>
          <div class="line"></div>
          <p>超前的服务意识、精湛的服务质量</p>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="team_container">
      <CenterGroup
        :size1="'48px'"
        :size2="'36px'"
        :title="'TEAM BUILDING'"
        :subTitle="'团队建设'"
      ></CenterGroup>
      <p class="enterprise_intr">
        团队是指拥有共同目标，并且具有不同能力的一小群人有意识的协调行为或力的系统，这群人就如同人的五官一样，共同协作维持一个人的生存，缺一不可。
      </p>
      <div class="team_list">
        <div class="team_item" v-for="(item, index) in teamList" :key="index">
          <img :src="item.img" alt="" />
          <div class="intr">
            <h3 v-text="item.title"></h3>
            <p v-text="item.intr"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterGroup from "../components/CenterGroup";
export default {
  name: "CorporateCulture",
  data() {
    return {
      teamList: [
        {
          title: "技能培训1",
          intr: "技术劳务人员的专业培训、工艺流程的监督控制",
          img: require("../assets/team_bg1.png"),
        },
        {
          title: "技能培训2",
          intr: "技术劳务人员的专业培训、工艺流程的监督控制",
          img: require("../assets/team_bg2.png"),
        },
        {
          title: "技能培训3",
          intr: "技术劳务人员的专业培训、工艺流程的监督控制",
          img: require("../assets/team_bg3.png"),
        },
        {
          title: "技能培训4",
          intr: "技术劳务人员的专业培训、工艺流程的监督控制",
          img: require("../assets/team_bg4.png"),
        },
      ],
    };
  },
  components: { CenterGroup },
};
</script>

<style lang="less" scoped>
.banner img {
  width: 100%;
  min-width: 1200px;
  display: block;
}
.enterprise_culture {
  text-align: center;
  margin: 80px 0 85px 0;
  h3 {
    font-size: 48px;
    line-height: 1;
    padding-bottom: 20px;
  }
  p {
    font-size: 24px;
    line-height: 1;
  }
}
.enterprise_intr {
  text-align: center;
  width: 1200px;
  margin: 0 auto;
  line-height: 30px;
  font-size: 18px;
  color: #666666;
  margin-bottom: 120px;
}
.idea_container {
  width: 1200px;
  margin: 0 auto;
  .idea_item {
    display: flex;
    height: 265px;
    padding: 75px 0 0 80px;
    .left {
      width: 10px;
      height: 10px;
      background: #7b2063;
      margin: 10px 10px 0 0;
    }
    .right {
      h3 {
        font-size: 28px;
        font-weight: bold;
        line-height: 1;
      }
      .line {
        width: 38px;
        height: 4px;
        background: #e6e6e6;
        margin: 19px 0 28px 0;
      }
      p {
        font-size: 20px;
        line-height: 1;
      }
    }
  }
  .idea_item:nth-child(1) {
    background: url("../assets/idea_bg1.png") no-repeat;
    background-size: 1200px;
  }
  .idea_item:nth-child(2) {
    background: url("../assets/idea_bg2.png") no-repeat;
    background-size: 1200px;
  }
  .idea_item:nth-child(3) {
    background: url("../assets/idea_bg3.png") no-repeat;
    background-size: 1200px;
  }
  .idea_item:nth-child(4) {
    background: url("../assets/idea_bg4.png") no-repeat;
    background-size: 1200px;
  }
}
.team_container {
  width: 1200px;
  margin: 120px auto 130px auto;
}
.team_list {
  display: flex;
  .team_item {
    flex: 1;
    position: relative;
    > img {
      width: 100%;
      display: block;
    }
    .intr {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(123, 32, 99, 0);
      transition: background, color, ease 0.6s;
      left: 0;
      top: 0;
      color: rgba(255, 255, 255, 0);
      padding: 116px 37px 0 37px;
      h3 {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 52px;
      }
      p {
        font-size: 18px;
        text-align: center;
        margin: 0 auto;
      }
    }
  }
  .team_item:hover {
    .intr {
      background: rgba(123, 32, 99, 0.68);
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
