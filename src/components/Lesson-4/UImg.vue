<script setup>
import {defineProps, defineEmits, computed, watch, ref} from 'vue'

const value = ref(modelValue)

const emits = defineEmits(['update:modelValue'])

const {modelValue} = defineProps({
  modelValue: Array
})

// Img
const reviewPhoto = computed(() => {
  if(value.value) {
    return URL.createObjectURL(value.value)
  }
})

const loadImg = (e) => {
  const [file] = e.target.files
  value.value = file
}

watch(value, () => {
  emits('update:modelValue', value.value)
})

</script>

<template>
  <div>
    <input 
      type="file" 
      class="form-control" 
      @change="loadImg"
    >
    <div
      v-if="value" 
      class="my-4"
    >
      <img 
        :src="reviewPhoto"
        width="400"
        height="250"
      >
    </div>
  </div>
</template>

<style scoped>
/*Style*/
</style>
