/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-03-23 12:08:30
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-29 10:28:26
 */

// import '@babel/polyfill';

import Vue from 'vue';
import store from '@/store';
import router from '@/router';
// import  VuexStoreRegister './plugins/vuexLazy';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { testTypescript } from './currency';
import { addFunc } from './utils';
// import './asstes/scss/index.scss';
import './theme/index.scss';
const VuexStoreRegister = require('./plugins/vuexLazy');
// Vue.filter('currency', currencyFilter);
Vue.use(VuexStoreRegister);
testTypescript();
const aa = addFunc(11, 22);
console.log('aa: ', aa);

Vue.config.productionTip = false;
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
registerServiceWorker();
