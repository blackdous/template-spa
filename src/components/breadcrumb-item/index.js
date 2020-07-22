/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-05-24 22:35:45
 * @LastEditors: asyncnode
 * @LastEditTime: 2020-05-24 22:37:58
 */
import HpBreadcrumbItem from './breadcrumb-item.vue';

HpBreadcrumbItem.install = function(Vue) {
  Vue.component(HpBreadcrumbItem.name, HpBreadcrumbItem);
};

export default HpBreadcrumbItem;
