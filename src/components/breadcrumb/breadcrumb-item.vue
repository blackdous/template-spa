<!--
 * @Descripttion: hp-breadcrumb-item
 * @Author: asyncnode
 * @Date: 2020-05-24 22:34:35
 * @LastEditors: asyncnode
 * @LastEditTime: 2020-05-24 22:40:21
-->
<template>
  <span class="hp-breadcrumb__item">
    <span
      ref="link"
      :class="['hp-breadcrumb__inner', to ? 'link' : '']"
      role="link"
    >
      <slot />
    </span>
    <i
      v-if="separatorClass"
      class="hp-breadcrumb__separator"
      :class="separatorClass"
    />
    <span v-else class="hp-breadcrumb__separator" role="presentation">
      {{ separator }}
    </span>
  </span>
</template>

<script>
export default {
  name: 'HpBreadcrumbItem',
  props: {
    // TODO: 接受跳转路径
    to: {
      type: [String, Object],
      default: ''
    },
    // TODO: 跳转方式是否为replace
    repalce: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // TODO: 接受父组件传入的 分隔符
      separator: '',
      // TODO: 接受父组件传入的 分隔符 class
      separatorClass: ''
    };
  },
  // TODO: 接受provide注入的组件实例
  inject: ['hpBreadcrumb'],
  mounted() {
    this.separator = this.hpBreadcrumb.separator;
    this.separatorClass = this.hpBreadcrumb.separatorClass;
    // TODO: 获取元素实例
    const linkDom = this.$refs.link;
    linkDom.setAttribute('role', 'link');
    linkDom.addEventListener('click', (event) => {
      const { to, $router, repalce } = this;
      if (!to || !$router) {
        return false;
      }
      repalce ? $router.repalce(to) : $router.push(to);
    });
  }
};
</script>
