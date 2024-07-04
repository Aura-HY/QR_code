<template>
<var-app-bar title="标题">
    <template #left>
      <var-button
        color="transparent"
        text-color="#fff"
        round
        text
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu>
        <var-button
          color="transparent"
          text-color="#fff"
          round
          text
        >
          <var-icon name="menu" :size="24" />
        </var-button>

      </var-menu>
    </template>
  </var-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>