/*
 * @Descripttion: 默认通过 pages 目录读取 页面目录
 * @Author: heidous
 * @Date: 2020-07-24 14:51:09
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-24 18:00:39
 */
export const routes = require.context('../pages', true, /\.vue$/);
const requireAll = (context) => context.keys().map(context);
requireAll(routes).forEach((route) => {
  console.log(route);
});
console.log('routes: ', routes.keys());
