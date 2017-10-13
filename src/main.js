// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import routerOption from './router'
import element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Router);

const router = new Router({
  routes: routerOption
}
)

//全局导航守卫
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   next();
// })

Vue.use(element)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
