<!--
 * @Descripttion: hp-breadcrumb
 * @Author: asyncnode
 * @Date: 2020-05-24 22:21:28
 * @LastEditors: asyncnode
 * @LastEditTime: 2020-05-25 09:11:06
-->
<template>
  <div class="hp-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HpBreadCrumb',
  props: {
    // 分隔符
    separator: {
      type: String,
      default: '/'
    },
    // 分隔符class
    separatorClass: {
      type: String,
      default: ''
    }
  },
  /**
   * TODO: 通过provide 注入当前组件this进入子孙组件
   * @return {Object} Breadcrumb当前组件实例
   */
  provide() {
    return {
      hpBreadcrumb: this
    };
  },
  mounted() {
    // 获取所有的面包屑子项
    const items = this.$el.querySelectorAll('.hp-breadcrumb__item');
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page');
    }
  }
};
</script>
