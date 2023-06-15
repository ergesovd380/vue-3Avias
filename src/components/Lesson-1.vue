<!-- <script setup>
  // что такое реактивность и как пользоваться им на Vue-3
  import {ref, reactive} from 'vue'
  const count = ref(0)          // Обычный ref

  const inst = () => {
    count.value += 1            // обязательно нужно value
  }

  const counter = reactive({      // он как объект и при подключении к ниму надо counter.count 
    count: 0
  })
  
</script>

<template>
  <div>
    <h1>Counter reactive with ref and reactive</h1>
    <button @click="count++">Count: {{ count }}</button>
    <button @click="inst">Count with funct: {{ count }}</button>
    <hr>
    <button @click="counter.count++">CountReact: {{ counter.count }}</button>
  </div>
</template> -->

 <!-- Section 2 циклы -->
<!-- <script setup>
  import {ref} from 'vue'

  const people = ref([
    {
      id: 1,
      name: 'Dovlet',
      age: 21 
    },
    {
      id: 2,
      name: 'Oleg',
      age: 25 
    },
    {
      id: 3,
      name: 'Myrat',
      age: 16
    }
  ])
</script>

<template>
  <div>
    <h1>v-for, v-if, v-show in Vue-3</h1>
    <ul>
      <li v-for="person in people" :key="person.id" v-show="person.age > 15">
        <strong v-if="person.name.length > 3">{{ person.name }}</strong>
        <sup :class="{'red': person.age < 20}">{{ person.age }}</sup>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .red {
    color: red;
  }
</style> -->