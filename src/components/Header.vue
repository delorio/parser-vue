<script setup>
 import {onMounted} from "vue";

 const token = window.localStorage.getItem('Authorization')
 function exit(){
window.localStorage.removeItem('Authorization')
 }

</script>
<template>
  <header class="header">
    <router-link v-if="!token"  to="authorization">
    <img src="../components/icons/exit.png">
    </router-link>
    <a v-else @click="exit"><img src="../components/icons/exit.png"></a>
  </header>
</template>

<style scoped>
.header{
  height: 75px;
  width: 100%;
  border-bottom: #DCE4EA solid 1px;
  display: flex;
  justify-content: right;
}
img{
  width: 44px;
  height: 44px;
  margin-right: 44px;
  margin-top: 14px;
  cursor: pointer;
}
</style>