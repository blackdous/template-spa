/*
 * @Descripttion: !! 默认通过 modules 目录读取 页面目录 (可以在这个文件中处理权限问题)
 * @Author: heidous
 * @Date: 2020-07-24 14:51:09
 * @LastEditors: heidous
 * @LastEditTime: 2020-08-19 11:24:37
 */
export const routesModules = require.context('./modules', true, /\.js$/);
let home = () => import(/* WebpackPreLoad: true, webpackChunkName: "user" */ '@/pages/home')
{{#tsConfig}}
  home  = () => import(/* WebpackPreLoad: true, webpackChunkName: "user" */ '@/pages/home-ts')
{{/tsConfig}}
const routesConstant = [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: '首页',
      icon: ''
    },
    component: home
  }
];
let routes = [];
const requireAll = (context) => context.keys().map(context);
requireAll(routesModules).forEach((route) => {
  console.log(route.default);
  routes = routesConstant.concat(route.default);
});
console.log('routes: ', routes);
export default routes;
