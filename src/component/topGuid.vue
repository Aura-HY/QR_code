<template>
<var-app-bar title="" color="linear-gradient(to right, #69dbaa, #3a7afe)" >
    <template #left>
      <var-button
        color="transparent"
        text-color="#fff"
        @click="goBack"
        round
        text
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>

    </template>
  </var-app-bar>
</template>

<script>
export default {
  methods:{
    goBack() {
            this.$router.go(-1);
        }
  }
}
</script>

<style>

</style>