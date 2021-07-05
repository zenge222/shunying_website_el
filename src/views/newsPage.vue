<template>
  <div class="newsPage">
    <div class="banner">
      <img src="../assets/news_banner.png" alt="" />
    </div>
    <div class="enterprise_culture">
      <h3>最新动态</h3>
      <p>LATEST NEWS</p>
    </div>
    <div class="news_container">
      <div class="news_item" v-for="(item, index) in newsList" :key="index">
        <img @click="toDetail(123456)" src="../assets/news_img1.png" alt="" />
        <div class="news_content">
          <h3 @click="toDetail(123456)">纷纷亮招拔头筹，你追我赶逞英豪</h3>
          <p>
            2021年度上海舜瀛物业技能比武大赛于1月17日成功举办。本届比武大赛本着公正、公平、公开的原则，通过参赛人员随机抽签的方式进行。技能比武大赛共分为：清洁玻璃、晶面清洁、卫生间清洁三个项目；当天比赛现场各组比赛人员争分夺秒、挥汗奋战呈现出一派热火朝天的竞赛。评审团也认真、负责、专业的参与评判
          </p>
          <div class="news_btm">
            <span>日期：2020-09-11 07:12 </span>
            <em @click="toDetail(123456)">查看详情 ></em>
          </div>
        </div>
      </div>
      <pagination
        style="text-align: center"
        v-show="total > 0"
        :total="total"
        :limit="fromParams.pageSize"
        :page="fromParams.pageNo"
      />
    </div>
  </div>
</template>

<script>
import Pagination from "../components/Pagination";
export default {
  name: "ContactUs",
  data() {
    return {
      newsList: [1, 2, 3, 4],
      fromParams: {
        pageNo: 1,
        pageSize: 6,
      },
      total: 4,
    };
  },
  components: { Pagination },
  methods: {
    toDetail(id){
      let params = {
        id:id
      }
      this.pushTo('NewsDetail',params);
    }
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
.news_container {
  width: 1200px;
  margin: 0 auto;
  .news_item {
    background: #f6f6f6;
    padding: 50px;
    margin-bottom: 40px;
    display: flex;
    align-items: flex-start;
    > img {
      width: 300px;
      display: block;
      margin-right: 50px;
      cursor: pointer;
    }
    .news_content {
      flex: 1;
      > h3 {
        cursor: pointer;
        line-height: 1;
        font-size: 24px;
        margin-bottom: 27px;
      }
      > p {
        font-size: 14px;
        color: #666666;
        height: 69px;
        line-height: 21px;
        margin-bottom: 59px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .news_btm {
        display: flex;
        justify-content: space-between;
        span {
          font-size: 14px;
          color: #8b8b8b;
        }
        em {
          cursor: pointer;
          font-size: 16px;
          color: #7b2063;
        }
      }
    }
  }
}
</style>
