<script setup>

import Rating from "@/components/Rating.vue";
import Comments from "../components/Comments.vue";
import axios from "axios";
import {reactive, onMounted, proxyRefs} from "vue";

const token = window.localStorage.getItem('Authorization')
let data = reactive({})

onMounted(()=>{
  comments()
})
async function comments(){
  try{
    const response = await axios.get('http://localhost:8083/api/reviews',{
      headers:{
        Authorization:'Bearer '+ token
      }
    })
    data.value = response.data

  }
  catch (e){
    console.log(e.message)
  }


}
</script>

<template>
  <div id="wrapper">

  <div><div class="yandexMap">
    <div class="wrapper-svg">
      <svg width="12px" height="15px" viewBox="0 0 32 32" fill="none">
        <path d="M16 2C10.477 2 6 6.477 6 12C6 19.5 16 30 16 30C16 30 26 19.5 26 12C26 6.477 21.523 2 16 2Z"
              fill="#FF0000"/>
        <circle cx="16" cy="12" r="4" fill="white"/>
      </svg>
    </div>
    <div class="content">Яндекс Карты</div>
  </div></div>

  <div class="wrapper-block">
    <div class="comments">
      <Comments v-for="comment in data.value " :data="comment"></Comments>

    </div>
    <div class="rating">
      <Rating></Rating>
    </div>
  </div>
  </div>
</template>

<style scoped>
#wrapper{
  display: flex;
  flex-direction: column;
  margin-top: 26px;
}
.comments{
  width: 69.8%;

}
.rating{
  width: 30.2%;
}

.yandexMap {
  text-align: center;
  align-items: center;
  margin-left: 26px;
  width: 112px;
  height: 25px;
  display: flex;
  border-radius: 8px;
  font-size: 12px;
 border: solid #DCE4EA 1px;
}

.wrapper-svg{
  margin-top: 5px;
  margin-left: 6px;
  display: inline-block;
}
.content{
  margin-left: 6px;
}
.wrapper-block{
  display: flex;
}

</style>