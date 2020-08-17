<!--
 * @Descripttion: 文档
 * @Author: asyncnode
 * @Date: 2020-05-13 10:37:47
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-28 17:51:44
-->
<template>
  <div id="app">
    <hpRadioEx></hpRadioEx>
    <hpBreadcrumbEx></hpBreadcrumbEx>
    <!-- <Home></Home> -->
    <router-view></router-view>
  </div>
</template>
<script>
import hpRadioEx from '@examples/components/radio';
import hpBreadcrumbEx from '@examples/components/breadcrumb';
// import Home from './pages/Home';
export default {
  $isVuex: true,
  name: 'App',
  components: {
    hpRadioEx,
    hpBreadcrumbEx
    // Home
  }
};
</script>
