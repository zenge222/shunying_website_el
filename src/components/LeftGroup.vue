<template>
  <div class="left_group">
    <h3 v-text="title"></h3>
    <p v-text="subTitle"></p>
  </div>
</template>
<script>
export default {
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
  },
};
</script>
<style scoped>
.left_group {
  text-align: left;
  margin-bottom: 46px;
}
.left_group h3 {
  font-size: 48px;
  color: rgba(191, 191, 191, 0.21);
  line-height: 1;
}
.left_group p {
  font-size: 36px;
  line-height: 1;
  position: relative;
  top: -10px;
}
</style>