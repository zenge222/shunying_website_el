<template>
  <div class="c_title_group">
    <h3 :style="{ 'font-size': size1, color: color1 }" v-text="title"></h3>
    <p :style="{ 'font-size': size2, color: color2 }" v-text="subTitle"></p>
  </div>
</template>
<script>
export default {
  name: "CenterGroup",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    color1: {
      type: String,
      default: "rgba(191, 191, 191, 0.21)",
    },
    color2: {
      type: String,
      default: "#333333",
    },
    size1: {
      type: String,
      default: "60px",
    },
    size2: {
      type: String,
      default: "36px",
    },
  },
};
</script>
<style scoped>
.c_title_group {
  text-align: center;
  margin-bottom: 50px;
}
.c_title_group h3 {
  color: rgba(191, 191, 191, 0.21);
  line-height: 1;
}
.c_title_group p {
  line-height: 1;
  position: relative;
  top: -20px;
}
</style>