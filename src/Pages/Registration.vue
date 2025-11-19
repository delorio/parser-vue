<script setup>

import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const name = ref('')
const password = ref('')
const password_confirmation = ref('')
const email = ref('')
const router = useRouter()


async function registration() {
  try {
    const response = await axios.post('http://localhost:8083/api/users', {
      'name': name.value,
      'password': password.value,
      'password_confirmation': password_confirmation.value,
      'email': email.value,

    })
    window.localStorage.setItem('Authorization',response.data.token)
    router.push('settings')
  } catch (e) {
    return  e.message
  }


}
</script>

<template>

  <form id="wrapper" @submit.prevent="registration">
    <input v-model="name" type="text" placeholder="name">
    <input v-model="email" type="email" placeholder="email">
    <input v-model="password" type="password" placeholder="password">
    <input v-model="password_confirmation" type="password" placeholder="password confirmation">
    <router-link to=""></router-link>
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