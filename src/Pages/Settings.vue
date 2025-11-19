<script setup>
import Connect from '../components/СonnectYandex.vue'
import axios from "axios";
import {useRouter} from "vue-router";
const router =useRouter()
const token = window.localStorage.getItem('Authorization')


async function setUrl(url) {
  try {
    const response = await axios.post('http://localhost:8083/api/setUrl', {'yandexUrl': url},{
      headers:{
        Authorization:'Bearer '+ token
      }
    })
    if (response.status === 201) {
      router.push('review')
    }
  } catch (e) {
    return e.message
  }
}
</script>

<template>
<section class="wrapper">
  <Connect :set-url="setUrl" class="connect"></Connect>

</section>
</template>

<style scoped>
.wrapper {
  width: 100%;
  background-color: #FFFFFF
}

.connect{
  padding-top: 18px;
  padding-left: 35px;

}

</style>