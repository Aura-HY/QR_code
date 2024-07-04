<template>
    <router-view></router-view>
</template>

<script lang="js">
export default {
    name: 'App',
    components: {},
    data() {
        return {};
    },
    mounted() {},
    updated() {},

    methods: {
        // 用户在移动端设备点击后退按钮时，返回上一条路由
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped></style>
