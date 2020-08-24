const userRouter = [
  {
    name: 'UserInfo',
    path: '/userinfo',
    meta: { title: '用户信息', icon: '' },
    component: () => import('@/pages/user/info')
  },
  {
    name: 'UserDetail',
    path: '/userdetail',
    meta: { title: '用户详情', icon: '' },
    component: () =>
      import('@/pages/user/detail')
  }
];
export default userRouter;
