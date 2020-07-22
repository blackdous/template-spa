/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-05-20 17:27:51
 * @LastEditors: asyncnode
 * @LastEditTime: 2020-05-21 09:01:15
 */
import HpRadioGroup from '../radio/radio-group.vue';

HpRadioGroup.install = function(Vue) {
  Vue.component(HpRadioGroup.name, HpRadioGroup);
};

export default HpRadioGroup;
