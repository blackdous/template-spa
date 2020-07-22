<!--
 * @Descripttion: hpBreadcrumbEx
 * @Author: asyncnode
 * @Date: 2020-05-24 22:40:59
 * @LastEditors: asyncnode
 * @LastEditTime: 2020-05-25 09:00:24
-->
<template>
  <div>
    <hp-breadcrumb ref="breadVnode" separator=">">
      <hp-breadcrumb-item :to="{ path: '/' }">活动列表 </hp-breadcrumb-item>
      <hp-breadcrumb-item>活动列表1 </hp-breadcrumb-item>
    </hp-breadcrumb>
  </div>
</template>

<script>
import HpBreadcrumb from '@com/breadcrumb/breadcrumb';
import HpBreadcrumbItem from '@com/breadcrumb/breadcrumb-item';
export default {
  name: 'hpBreadcrumbEx',
  components: {
    // 面包屑
    HpBreadcrumb,
    // 面包屑
    HpBreadcrumbItem
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    // this.breadVnode;
    console.log('this.breadVnode: ', this.$refs.breadVnode.separator);
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
