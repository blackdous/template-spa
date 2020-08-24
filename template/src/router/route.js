export const routesModules = require.context('./modules', true, /\.js$/);
const routesConstant = [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: '首页',
      icon: ''
    },
    component: () =>
      import(/* WebpackPreLoad: true, webpackChunkName: "user" */ '@/pages/home')
  }
];
let routes = [];
const requireAll = (context) => context.keys().map(context);
requireAll(routesModules).forEach((route) => {
  routes = routesConstant.concat(route.default);
});
export default routes;
