import Vue from 'vue';
import Vuex from 'vuex';
// import main from './modules/main';
// 挂载Vuex
Vue.use(Vuex);

const modulesStore = require.context('./modules', true, /\.js$/);

const modules = modulesStore.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesStore(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    modulesList: {
      namespaced: true,
      state: {
        ...modules
      }
    },
    main: modules.main
  }
});

export default store;
