
const routerOption = [
  // component 懒加载
  { path: '/', name: 'index', component: resolve => require(['../components/HelloWorld.vue'], resolve) },
  { path: '/element', component: resolve => require(['../components/element.vue'], resolve) },
  {
    path: '/demo', component: resolve => require(['../components/demo.vue'], resolve), beforeEnter: (to, from, next) => {
      console.log(to)
      console.log(from);
      // next();
    }
  },
  { path: '/beck', redirect: { name: 'index' } } //重定向
]

export default routerOption;
