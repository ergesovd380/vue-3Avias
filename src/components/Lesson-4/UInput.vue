<script setup>
  import {ref, watch, defineProps, defineEmits} from 'vue'

  const props = defineProps({
    modelValue: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
      validator: (val) => [
        'text',
        'number',
        'email',
        'tel',
        'password',
        'textarea'
      ].includes(val)
    },
  });

  const emits = defineEmits([
    'update:modelValue'
  ]);

  const value = ref(props.modelValue);

  watch(value, () => {
    emits('update:modelValue', value)
  });

</script>

<template>
  <div>
    <input 
      v-if="type !== 'textarea'"
      :type="type" 
      class="form-control my-2" 
      :placeholder="placeholder"
      v-model="value"
    >
  
    <textarea 
      v-else
      rows="5" 
      class="form-control my-2" 
      :placeholder="placeholder"
      v-model="value"
    ></textarea>
  </div>
</template>

<style scoped>
/*Style*/
</style>
