/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-04-24 10:51:58
 * @LastEditors: asyncnode
 * @LastEditTime: 2020-05-20 18:26:46
 */

import HpButton from './button.vue';

HpButton.install = function(Vue) {
  Vue.component(HpButton.name, HpButton);
};

export default HpButton;
