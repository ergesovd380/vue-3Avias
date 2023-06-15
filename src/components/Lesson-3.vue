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
const starPrice = [1, 2, 3, 4, 5];

const Star = (e) => {
  review.stars = e.target.id
}


// Img
const reviewPhoto = computed(() => {
  if(review.img) {
    return URL.createObjectURL(review.img)
  }
})

const loadImg = (e) => {
  const file = e.target.files[0]
  review.img = file
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
        <input 
          type="text" 
          class="form-control my-2" 
          placeholder="Как вас зовут?"
          v-model="review.name"
        >
        <textarea 
          rows="5" 
          class="form-control my-2" 
          placeholder="Что понравилось, что нет?"
          v-model="review.text"
        ></textarea>
      </div>
<!--Stars-->
      <div>
        <h2>Оценка</h2>
        <div 
          class="form-check" 
          v-for="star in starPrice" 
          :key="star"
        >
          <input 
            class="form-check-input" 
            type="radio" 
            name="flexStarDefault" 
            :id="star" 
            @click="Star"
          >
          <label 
            class="form-check-label" 
            :for="star"
          >
            {{ star }}
          </label>
        </div>
      </div>
<!--Photo-->
      <div>
        <h2>Фото</h2>
        <input 
          type="file" 
          class="form-control" 
          @change="loadImg"
        >
        <div
          v-if="review.img" 
          class="my-4"
        >
          <img 
            :src="reviewPhoto" 
            width="400"
            height="250"
          >
        </div>
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
        <button 
          type="submit"
          class="btn btn-dark"
          @click="postReview"  
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/*Style*/
</style>