<template>

  <var-app-bar title="开启圆角" title-position="center" round />

    <div class="hello">
        <div class="hi">
            Hi~
        </div>
        <div class="name">
            {{ userName }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName:'123'
        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<style>
.hello{
    height: 20vh;
    width: 100vw;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 10px 1px 1px rgb(249, 247, 247);
}
.hi{
    position: relative;
    left: 10%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: xx-large;
}
</style>