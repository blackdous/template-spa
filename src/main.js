/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-03-23 12:08:30
 * @LastEditors: asyncnode
 * @LastEditTime: 2020-05-24 23:01:20
 */

// import '@babel/polyfill';

import Vue from 'vue';
import App from './App';
// import './asstes/scss/index.scss';
import './theme/index.scss';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
