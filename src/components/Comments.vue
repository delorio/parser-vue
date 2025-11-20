<script setup>

import Star from "@/components/Star.vue";
import {onMounted} from "vue";
const props = defineProps({
  data: Object
})
onMounted(()=>{
})
function colorData (i){
  if (parseFloat(props.data.rating)>= i) return true

}
</script>

<template>
<div id="wrapper">

<div class="content">
  <div class="content-header">
    <div>{{ props.data.date }}</div>
    <div class="stars">
      <Star
          v-for="i in 5"
          :color="colorData(i) ?  '#FBBC04' : '#ffffff'"
          class="star"
      ></Star>

    </div>
  </div>
  <div class="user-name">{{ props.data.name }}</div>
  <div class="content-text">{{ props.data.title }}
  </div>
</div>
</div>
</template>

<style scoped>

#wrapper{
  margin-left: 26px;
  margin-right: 26px;
  min-height: 155px;
  padding: 13px 0 13px 13px;
  border: solid 2px #F6F8FA;
  box-shadow: 0 0 15px 5px #E0E7EC;
  border-radius: 12px;
  margin-bottom: 23px;

}

.content {
  padding-left: 3px;
  border-radius: 12px;
  background-color: #F6F8FA;
}
.content-header{
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
}
.user-name{
  font-weight: 700;
  margin-top: 15px;
  font-size: 12px;
  display: block;
}
.content-text{
  font-size: 12px;
  font-weight: 400;

}

</style>