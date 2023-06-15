<script setup>
import axios from 'axios';
import {reactive, computed} from 'vue'

const review = reactive({
  name: '',
  text: '',
  stars: null,
  img: null,
  isRecommended: true
})

// Stars
const Star = (n) => {
  review.stars = n
}

// Post Review
const postReview = () => {
  axios.post('/api/review', review, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log('Конец');
  })
}

</script>

<template>
  <div class="container mt-5">
    <form @submit.prevent.stop="">
<!--Name and text-->
      <div>
        <UInput
          type="text" 
          placeholder="Как вас зовут?"
          v-model="review.name"
        />
        <UInput
          type="textarea"
          placeholder="Что понравилось, что нет?"
          v-model="review.text"
        />
      </div>
<!--Stars-->
      <div>
        <h2>Оценка</h2>
        <URadio 
          type="radio"
          name="flexStarDefault"
          @chooseStar="Star"
        />
      </div>
<!--Photo-->
      <div>
        <h2>Фото</h2>
        <UImg 
          v-model="review.img"
        />
      </div>
<!--Recomend-->
      <div class="my-3">
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="radio" 
            name="recomendRadio" 
            id="recomend" 
            v-model="review.isRecommended"
            :value="true"
          >
          <label 
            class="form-check-label" 
            for="recomend"
          >
            Рекомендую
          </label>
        </div>
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="radio" 
            name="recomendRadio" 
            id="recomend1" 
            v-model="review.isRecommended"
            :value="false"
          >
          <label 
            class="form-check-label" 
            for="recomend1"
          >
            Не рекомендую
          </label>
        </div>
      </div>
<!--BTN-->
      <div>
        <UButton
          type="submit"
          @click="postReview"  
        >
          Submit
        </UButton>
      </div>
    </form>
  </div>
</template>

<style scoped>
/*Style*/
</style>
