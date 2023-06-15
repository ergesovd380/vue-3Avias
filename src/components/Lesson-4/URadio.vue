<script setup>
import { defineProps } from 'vue';
// Stars
const starPrice = [1, 2, 3, 4, 5];

const props = defineProps({
  type: String,
  name: String
})

</script>

<template>
  <div 
    class="form-check" 
    v-for="star in starPrice" 
    :key="star"
  >
    <input 
      :type="type"
      :name="name"
      class="form-check-input"   
      :id="star" 
      @click="$emit('chooseStar', star)"
    >
    <label 
      class="form-check-label" 
      :for="star"
    >
      {{ star }}
    </label>
  </div>
</template>

<style scoped>
/*Style*/
</style>
