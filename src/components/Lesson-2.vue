<!-- <script setup>
import {ref, computed} from 'vue';

const products = ref([
  'Бананы',
  'Хлеб',
  'Яблоко',
  'Ананас',
  'Мандарин',
  'Лимон',
  'Помидор',
  'Лайм'
]);

const search = ref('');

const searchProduct = computed(() => {
  return products.value.filter(product => product.toLowerCase().indexOf(search.value) !== -1)
})

const reversSearch = computed(() => {
  return search.value.split('').reverse().join('')
})

</script>

<template>
  <div>
    <h1>Computed and search in Vue 3</h1>
    <input 
      type="search"
      placeholder="Продукты"
      v-model="search"
    >
    <h3>{{ reversSearch }}</h3>
    <hr>
    <ul>
      <li v-for="product in searchProduct" :key="product">{{ product }}</li>
    </ul>
  </div>
</template> -->

<!-- Second section harder search -->
<script setup>
  import {ref, computed} from 'vue';

  const products = ref([
    { id: 1, name: 'Бананы', price: 25},
    { id: 2, name: 'Хлеб', price: 28.5},
    { id: 3, name: 'Яблоко', price: 15},
    { id: 4, name: 'Ананас', price: 35.2},
    { id: 5, name: 'Мандарин', price: 16},
    { id: 6, name: 'Лимон', price: 12},
    { id: 7, name: 'Помидор', price: 20.5},
    { id: 8, name: 'Лайм', price: 23},
  ]);

  const search = ref('');

  const searchProduct = computed(() => {
    let p = products.value;
    let s = search.value;

    if(s) {
      p = p.filter(product => {
        return product.name.toLowerCase().indexOf(s) !== -1 ||
        // product.price.toString().indexOf(s) !== -1       // Если равно
        product.price <= s                                  // что выходит на эту сумму
      })
    }

    return p
  })
</script>

<template>
  <h1>Computed harder search with price in Vue 3</h1>
  <input 
    type="search"
    v-model="search"  
  >
  <hr>
  <ul>
    <li 
      v-for="product in searchProduct" 
      :key="product.id"
    >
      <strong>{{ product.name }}</strong>
      <sup>{{ product.price.toLocaleString() }}</sup>
    </li>
  </ul>
</template>
