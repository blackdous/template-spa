<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  $isVuex: true,
  name: 'App'
};
</script>
<style lang="scss">
  #app {
    font-size: 16px;
    font-weight: 500;
  }
</style>
