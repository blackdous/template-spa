/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-03-23 12:08:30
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-24 16:10:05
 */

// import '@babel/polyfill';

import Vue from 'vue';
import App from './App';
import { testTypescript } from './currency';
import { routes } from '@/router/route';

// import './asstes/scss/index.scss';
import './theme/index.scss';
// Vue.filter('currency', currencyFilter);

console.log('routes: ', routes);
testTypescript();

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
