/*
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-03-23 12:08:30
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-23 23:49:30
 */

// import '@babel/polyfill';

import Vue from 'vue';
import App from './App';
import { currencyFilter } from './currency';

// import './asstes/scss/index.scss';
import './theme/index.scss';
Vue.filter('currency', currencyFilter);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
