<template>
  <div class="newsDetail">
    <div class="banner">
      <img src="../assets/news_banner.png" alt="" />
    </div>

    <div class="detail_container">
      <h3>十五载砥砺感恩你我她——上海舜瀛物业管理有限公司年会圆满成功</h3>
      <span>日期：2020-09-11 07:12 </span>
      <div class="line"></div>
      <p>
        2018年3月8日下午，上海舜瀛物业管理有限公司以“十五载砥砺
        15周年感恩你我她”为主题的年会活动在上海添彩酒店盛大举行，总结过去一年取得的辉煌成绩，谋划新一年的发展布局，为企业的发展壮大奠定夯实基础。
      </p>
      <img src="../assets/news1.png" alt="" />
      <p>
        出席嘉宾的有：上海市绿化和市容环境卫生管理局宣传处处长章红兵，上海市环境学校校长佘润生，上海城市保洁同业联谊会会长佟佳杰，上海原始物业管理有限公司总经理朱豪杰，国家生态环境建设技术创新战略联盟秘书长郭乃顺，上海城市保洁联谊会顾问贺政明和上海舜瀛物业总经理张丽及全体工作人员欢聚一堂。
        新的一年，伴随着激情与挑战，上海舜瀛迎来清洁行业发展的新篇章。
        年会在上海舜瀛物业总经理张丽的精彩致辞中拉开序幕。既肯定了过去一年的工作业绩，又描绘了上海舜瀛广阔的前景，坚定了上海舜瀛人的信心，对他们今后的工作给予极大鼓舞和鞭策。
      </p>
      <img src="../assets/news2.png" alt="" />
      <p>
        上海市绿化和市容环境卫生管理局宣传处处长章红兵上台讲话，作为行业的政府主管部门领导见证了舜瀛的成长，肯定了舜瀛是一家有责任，有温度，有担当，有理想的企业，并为此感到骄傲和自豪。希望舜瀛会有更多、更好更好的十五年。上海市环境学校校长佘润生，上海城市保洁同业联谊会会长佟佳杰，作为特邀嘉宾也分别上台致辞，十五个春秋，上海舜瀛通过专业、优质的服务赢得了合作伙伴的高度认可和好评，并祝福上海舜瀛在2018年能更上一层楼。
        此外，多才多艺的上海舜瀛人，通过独唱、舞蹈、朗诵等各类丰富多彩节目的倾情演绎，展现自我，歌声、掌声、欢呼声荡漾在会场上。同时随着抽奖环节的推进，晚会高潮迭起，呈现了上海舜瀛大家庭和谐的氛围。
      </p>
      <div class="next_group">
        <p>上一篇：<a>以高端家政为媒 让品牌家政驻足</a></p>
        <p>下一篇：<a>没有了</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>
<style lang="less" scoped>
.banner img {
  width: 100%;
  min-width: 1200px;
  display: block;
}
.newsDetail {
  width: 100%;
  padding: 0 0 80px 0;
  background: #f6f6f6;
}
.detail_container {
  width: 1200px;
  margin: 80px auto 0 auto;
  background: #ffffff;
  padding: 50px;
  > h3 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  > span {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #8b8b8b;
    padding: 16px 0 40px 0;
  }
  > p {
    font-size: 16px;
    line-height: 30px;
    margin: 30px 0;
  }
  img {
    max-width: 100%;
    display: block;
  }
}
.next_group {
  display: flex;
  justify-content: space-between;
  p {
    a {
      color: #7b2063;
      cursor: pointer;
    }
  }
}
</style>