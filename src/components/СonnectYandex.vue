<script setup>


import {ref} from "vue";

const props = defineProps({
  setUrl: Function // Указываем тип
})
const url = ref('')
</script>

<template>
  <div class="wrapper">
<h2>Подключить Яндекс</h2>
  <p>Укажите ссылку на Яндекс, пример <span>https://yandex.by/maps/org/samoye_populyarnoye_kafe_tsentr/1010501395/reviews/?ll=49.680680%2C58.602888&z=17</span></p>
  <input v-model="url" type="text">
    <button @click="props.setUrl(url)">Сохранить</button>
  </div>
</template>

<style scoped>
input{
  width: 480px;
  height: 24px;
  margin-top: 5px;
  color: #6C757D;
border-radius: 6px;
}
p{
  color: #6C757D;
  margin-top: 15px;
}
button{
  display: block;
  width: 128px;
  height: 25px;
  color: #FFFFFF;
  background-color: #339AF0;
  margin-top: 18px;
  border-radius: 6px;
}
</style>