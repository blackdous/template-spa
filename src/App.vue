<!--
 * @Descripttion: 文档
 * @Author: asyncnode
 * @Date: 2020-05-13 10:37:47
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-24 11:51:52
-->
<template>
  <div id="app">
    <hpRadioEx></hpRadioEx>
    <hpBreadcrumbEx></hpBreadcrumbEx>
    <Home></Home>
  </div>
</template>
<script>
import hpRadioEx from '@examples/components/radio';
import hpBreadcrumbEx from '@examples/components/breadcrumb';
import Home from './pages/Home';
export default {
  name: 'App',
  components: {
    hpRadioEx,
    hpBreadcrumbEx,
    Home
  }
};
</script>
