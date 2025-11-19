<script setup>

import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const email = ref('')
const password = ref('')
const router = useRouter()
async function authorize(){

  const response = await axios.post('http://localhost:8083/api/auth',{
    'email': email.value,
    'password': password.value
  })

  if (response.status===200){
    window.localStorage.setItem('Authorization',response.data.token)
    router.push('review')
  }

}
</script>

<template>
  <form id="wrapper" @submit.prevent="authorize">
    <input v-model="email" type="text" placeholder="email">
    <input v-model="password" type="password" placeholder="password">
    <router-link to="registration">Регистрация</router-link>
    <button class="button" type="submit">Отправить</button>
  </form>

</template>

<style scoped>

#wrapper{
  margin-left: 16px;
  display: flex;
  flex-direction: column;
}

input {
  margin-top: 30px;
  height: 30px;
  width: 300px;
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