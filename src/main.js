/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-03-23 12:08:30
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-27 15:22:21
 */

// import '@babel/polyfill';

import Vue from 'vue';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
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
// console.log('aa: ', aa);
console.log('aa: ', aa);
// console.log('aa: ', aa);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
registerServiceWorker();
