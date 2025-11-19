<script setup>
import Panel from "@/components/Panel.vue";
import Header from "@/components/Header.vue";
</script>

<template>
<div id="main">
  <Panel class="panel"></Panel>
  <div class="wrapper">
    <Header></Header>
    <router-view class="link"></router-view>

  </div>
</div>
</template>

<style scoped>
#main{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.panel{
  min-width: 280px;
}
.wrapper{
  text-decoration: none;
  width: 100vw;
}
.link{
  width: 100%;
}
</style>
