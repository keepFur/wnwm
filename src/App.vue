<template>
  <div>
 <Header></Header>
 <Tab></Tab>
 <div class="content">I am content</div>
 <div class="footer">I am footer</div>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Tab from "./components/tab/Tab.vue";
export default {
  name: "App",
  components: {
    Header,
    Tab
  }
};
</script>

<style>

</style>
