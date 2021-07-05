<template>
    <div class="home">
        <header-fixed :changeHeader="false" :activeIndex="0"></header-fixed>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <footer-fixed></footer-fixed>
    </div>
</template>

<script>
    import headerFixed from "../components/headerFixed";
    import footerFixed from "../components/footerFixed";

    export default {
        name: "home",
        data() {
            return {};
        },
        components: {
            headerFixed, footerFixed
        },
        mounted() {

        },
        methods: {},
    };
</script>

<style scoped>

</style>
