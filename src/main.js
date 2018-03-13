"use strict";
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Goods from './components/goods/Goods';
import Seller from './components/seller/Seller';
import Ratings from './components/ratings/Ratings';
import VueRouter from 'vue-router';

// var vueRouter = require('vue-router');
Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [{
  path: '/goods',
  component: Goods
}, {
  path: '/seller',
  component: Seller
}, {
  path: '/ratings',
  component: Ratings
}];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router,
  components: {
    App
  },
  el: '#app',
  template: '<App/>'
});
// 启动路由
// router.start(app, '#app');
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// });
