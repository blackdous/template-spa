/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-05-20 17:32:13
 * @LastEditors: all
 * @LastEditTime: 2020-07-17 14:06:20
 */
import Button from './button/index.js';
import ButtonGroup from './button-group/index.js';
import Radio from './radio/index.js';
import RadioGroup from './radio-group/index.js';

const components = [Button, ButtonGroup, Radio, RadioGroup];

const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: 'v1.0.0',
  install,
  Button,
  ButtonGroup,
  Radio,
  RadioGroup
};
