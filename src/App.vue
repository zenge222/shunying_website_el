<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
#app {
  font-family: PingFangSC-Semibold, PingFang SC;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  /* display: none; */
}
</style>
