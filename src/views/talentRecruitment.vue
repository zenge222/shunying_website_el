<template>
  <div class="talentRecruitment">
    <div class="banner">
      <img src="../assets/talentRecruitment_banner.png" alt="" />
    </div>
    <div class="enterprise_culture" id="talent">
      <h3>人才招聘</h3>
      <p>TALENT RECRUITMENT</p>
    </div>
    <div class="resume_container">
      <div class="resume_bg">
        <h3>简历投递方式</h3>
        <div class="line"></div>
        <p>HR联系方式：龙小姐&王小姐</p>
        <p>电话：(021)61679549-814</p>
        <p>电子邮箱：hr@ceteng.com</p>
        <p>地址：上海市程家桥路258号银洲国际A座606室</p>
      </div>
      <div class="collapse_group" v-for="(item, index) in resList" :key="index">
        <div>
          <!-- -->
          <div :class="{ item_top: true, active: item.show }">
            <div class="left_padding">
              <div class="item_info">
                <h3>物业管理师</h3>
                <span></span>
                <p>发布时间：2020-12-18</p>
              </div>
              <div class="item_info2">
                <p>工作地址：上海</p>
                <p>教育程度：大专及以上</p>
                <p>工作经验：5年以上</p>
              </div>
            </div>
            <div @click="showItem(item)" class="item_right">
              <img
                v-show="!item.show"
                src="../assets/collapse_right.png"
                alt=""
              />
              <img
                v-show="item.show"
                src="../assets/collapse_down.png"
                alt=""
              />
            </div>
          </div>
          <el-collapse-transition>
            <div class="item_info_btm" v-show="item.show">
              <div class="info">
                <h3>任职要求：</h3>
                <p>1、会计学、财务管理、经济学等专业大专及以上学历；</p>
                <p>
                  2、会计/经济类中级或以上职称优先，册会计师、注册税务师优先；
                </p>
                <p>3、3年以上标杆物业企业、制造业财务管理经验。</p>
              </div>
              <div class="info">
                <h3>岗位职责：</h3>
                <p>
                  1、总部财务管理中心指导下，全面负责及组织公司各项财务管理工作，协助总经理进行经营管理；
                </p>
                <p>
                  2、根据公司整体战略发展规划，分解、细化和制订本部门的专业职能规划及业务规划，负责编制部门年度、季度、月度工作计划，并监督计划的落实；
                </p>
              </div>
            </div>
          </el-collapse-transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TalentRecruitment",
  data() {
    return {
      show3: false,
      resList: [{ show: false }, { show: false }, { show: false }],
    };
  },
  components: {},
  methods: {
    showItem(item) {
      item.show = !item.show;
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
.resume_container {
  width: 1200px;
  margin: 0 auto;
  .resume_bg {
    padding: 35px 0 0 30px;
    width: 100%;
    height: 260px;
    background: url("../assets/resume_bg.png") no-repeat;
    background-size: 1200px;
    margin-bottom: 80px;

    > h3 {
      font-weight: bold;
      font-size: 28px;
      line-height: 1;
    }
    .line {
      width: 55px;
      height: 4px;
      background: #7b2063;
      margin: 18px 0;
    }
    > p {
      font-size: 18px;
      margin-bottom: 12px;
    }
  }
}
.collapse_group {
  margin-bottom: 30px;
}
.left_padding {
  padding: 24px 0 0 30px;
}
.item_top {
  background: #f6f6f6;
  display: flex;
  justify-content: space-between;
  transition: background linear 0.4s;
  .item_info {
    display: flex;
    align-items: center;
    line-height: 1;
    margin-bottom: 20px;
    h3 {
      font-size: 24px;
      font-weight: bold;
    }
    span {
      display: block;
      width: 1px;
      height: 20px;
      margin: 0 30px 0 39px;
      background: #979797;
    }
    p {
      font-size: 14px;
      color: #888888;
    }
  }
  .item_info2 {
    display: flex;
    align-items: center;
    line-height: 1;
    p {
      font-size: 14px;
    }
    p:nth-child(2) {
      margin: 0 60px;
    }
  }
}
.item_right {
  padding: 40px;
  border-left: 1px solid #e1e1e1;
  img {
    display: block;
    width: 40px;
  }
}
.item_top.active {
  background: #7b2063;
  color: #ffffff;
  .item_info {
    span {
      background: #ffffff;
    }
    p {
      color: #ffffff;
    }
  }
}
.item_info_btm {
  background: #f6f6f6;
  padding: 30px;
  font-size: 14px;
  .info {
    margin-bottom: 30px;
    h3 {
      margin-bottom: 30px;
    }
    p{
      line-height: 22px;
    }
  }
}
</style>
