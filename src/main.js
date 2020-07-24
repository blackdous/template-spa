/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-03-23 12:08:30
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-24 09:30:34
 */

// import '@babel/polyfill';

import Vue from 'vue';
import App from './App';
import { testTypescript } from './currency';

// import './asstes/scss/index.scss';
import './theme/index.scss';
// Vue.filter('currency', currencyFilter);

testTypescript();

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
