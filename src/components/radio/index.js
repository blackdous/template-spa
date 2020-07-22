/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-04-24 14:43:09
 * @LastEditors: asyncnode
 * @LastEditTime: 2020-05-20 17:27:31
 */

import HpRadio from './radio.vue';

HpRadio.install = function(Vue) {
  Vue.component(HpRadio.name, HpRadio);
};

export default HpRadio;
