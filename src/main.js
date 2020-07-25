/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-03-23 12:08:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-26 00:27:48
 */

// import '@babel/polyfill';

import Vue from 'vue';
import App from './App';
import { testTypescript } from './currency';
import { routes } from '@/router/route';
import { addFunc } from './utils';
// import './asstes/scss/index.scss';
import './theme/index.scss';
// Vue.filter('currency', currencyFilter);

console.log('routes: ', routes);
// testTypescript();
testTypescript();
const aa = addFunc(11, 22);
console.log('aa: ', aa);
console.log('aa: ', aa);
console.log('aa: ', aa);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
