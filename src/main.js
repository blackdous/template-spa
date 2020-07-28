/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-03-23 12:08:30
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-28 15:50:01
 */

// import '@babel/polyfill';

import Vue from 'vue';
import store from './store';
// import  VuexStoreRegister './plugins/vuexLazy';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { testTypescript } from './currency';
import { routes } from '@/router/route';
import { addFunc } from './utils';
// import './asstes/scss/index.scss';
import './theme/index.scss';
const VuexStoreRegister = require('./plugins/vuexLazy');
// Vue.filter('currency', currencyFilter);
Vue.use(VuexStoreRegister);
console.log('routes: ', routes);
// testTypescript();
testTypescript();
const aa = addFunc(11, 22);
console.log('aa: ', aa);
// console.log('aa: ', aa);
// console.log('aa: ', aa);

Vue.config.productionTip = false;
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});
registerServiceWorker();
