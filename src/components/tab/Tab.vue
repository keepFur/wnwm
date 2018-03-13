<template>
<div class="tab">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">商家</router-link>
    </div>
</div>  
</template>

<script>
export default {};
</script>

<style scoped>
.tab {
  width: 100%;
  display: flex;
  height: 40px;
  line-height: 40px;
  border: 1px solid #dedede;
}
.tab-item {
  flex: 1;
  text-align: center;
}
</style>
