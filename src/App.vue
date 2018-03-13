<template>
  <div>
    <Header></Header>
    <Tab></Tab>
    <!-- 路由外链 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Tab from "./components/tab/Tab.vue";
import Goods from "./components/goods/Goods.vue";
import Seller from "./components/seller/Seller.vue";
import Footer from "./components/footer/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Tab,
    Footer
  }
};
</script>

<style>

</style>
