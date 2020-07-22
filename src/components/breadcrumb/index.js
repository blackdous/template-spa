/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-05-24 22:35:24
 * @LastEditors: asyncnode
 * @LastEditTime: 2020-05-24 22:37:23
 */

import HpBreadcrumb from './breadcrumb.vue';

HpBreadcrumb.install = function(Vue) {
  Vue.component(HpBreadcrumb.name, HpBreadcrumb);
};

export default HpBreadcrumb;
