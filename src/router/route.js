/*
 * @Descripttion: 默认通过 pages 目录读取 页面目录
 * @Author: heidous
 * @Date: 2020-07-24 14:51:09
 * @LastEditors: heidous
 * @LastEditTime: 2020-07-28 15:55:13
 */
export const routes = require.context('../pages', true, /\.vue$/);
console.log('routes: ', routes.keys());
// const requireAll = (context) => context.keys().map(context);
// requireAll(routes).forEach((route) => {
//   console.log(route);
// });
