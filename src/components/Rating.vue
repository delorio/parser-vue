<script setup>

import Star from "@/components/Star.vue";
import axios from "axios";
import {onMounted, ref} from "vue";
const token = window.localStorage.getItem('Authorization')
const stars = ref('')
const gradeCount = ref('')

const props = defineProps(
    {values: Object}
)

function colorData (i){
  if (parseFloat(props.values.rating)>= i) return true
}

</script>


<template>
<div id="wrapper">
  <div class="content_rating">
    <div class="rating">{{values.rating}}</div>
 <div v-for="i in 5" class="stars">
   <Star
       :color="colorData(i) ?  '#FBBC04' : '#ffffff'"
       class="star"
   ></Star>

 </div>
 </div>
  <div class="line"> </div>
  <div class="rating_count">Всего отзывов: {{values.grade_count}}</div>

</div>
</template>

<style scoped>

#wrapper{
  display: flex;
  flex-direction: column;
  width: 263px;
  height: 155px;
  box-shadow: 0 0 15px 5px #E0E7EC;
  border-radius: 12px;
}
.stars{
  display: flex;
  margin-top: 37px;
  margin-left: 12px;
}
.content_rating{
  display: flex;
}
.rating{
  margin-left: 16px;
  font-size: 40px;
  margin-top: 12px;
}
.star_color{
  fill: #FBBC04;
  stroke: #FBBC04;
  stroke-width: 2;
}
.star{
  width: 24px;
  height: 24px;
}
.line{
  margin-left: 16px;
  margin-top: 8px;
  width: 240px;
  height: 2px;
  background-color: #F1F4F7;

}
.rating_count{
  margin-top: 8px;
  margin-left: 16px;
  font-size: 12px;
}

</style>