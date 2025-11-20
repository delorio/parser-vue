<script setup>

import MyButton from "./MyButton.vue";
import router from "@/router/index.js";
import {useRoute} from "vue-router";
import {onMounted, ref, watch} from "vue";

const route = useRoute()
let path = ref('')

watch(route, (newValue, oldValue) => {
  path.value= newValue.path.slice(1)

})
</script>

<template>
<div id="wrapper">
  <div class="logo">
    <router-link to="/">
    <img src="./icons/лого.png">
    </router-link>
  </div>
  <h3 class="name">Название аккаунта </h3>

  <MyButton class="button_review"></MyButton>
  <ul>
    <li class="list" :class="{ 'list_active': path === 'review' }">
      <router-link to="/review">Отзывы</router-link>
    </li>
    <li class="list" :class="{ 'list_active': path === 'settings' }">
      <router-link to="/settings">Настройки</router-link>
    </li>

  </ul>
  
</div>
</template>

<style scoped>
#wrapper{
  height: 100vw;
  background-color:#F6F8FA ;
  font-family: Mulish,serif;
  font-size: 16px;
  font-weight: 700;
}
.logo{
  margin-top: 30px;
  margin-left: 29px;
  width: 160px;
  height: 28px;
}
img{
  width: 100%;
  height: 100%;
}
.name{
  margin-top: 14px;
  margin-left: 15px;
  color: #6C757D
}
.button_review{
  margin-top: 28px;
}
ul{
  margin-top: 10px;
  list-style: none;
  padding: 0;
}
.list_active{

  background-color: #FFFFFF;
}
.list{
  margin-top: 10px;
  padding-left: 50px;
  cursor: pointer;
  margin-left: 15px;
  color: #363740;
  width: 249px;
  height: 32px;
  border-radius: 12px;

}

</style>