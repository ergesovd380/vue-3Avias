<script setup>
//code
import {defineProps} from 'vue'

defineProps({
  type: String
})
</script>

<template>
  <div>
    <button 
      :type="type"
      class="btn btn-dark"
    >
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
/*Style*/
</style>