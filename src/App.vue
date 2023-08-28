<script setup lang="ts">
import HomeViewVue from './views/HomeView.vue';
import { useStore } from 'vuex';
import { ref, onMounted, computed, onUpdated } from 'vue';
import stormy from './assets/weatherBg/stormy.jpg';
import clear from './assets/weatherBg/clear.jpg';
import sunny from './assets/weatherBg/sunny.jpg';
import lightRain from './assets/weatherBg/lightRain.jpg';
import cloudy from './assets/weatherBg/cloudy.jpg';
import overcast from './assets/weatherBg/overcast.jpg';

const store = useStore();
const tempBg = ref<string>(''); // default value

const getWeather = async () => {
  await store.dispatch('fetchWeather');
  if (store.state.loading) {
    const selectedCityWeather = store.state.weatherCondition;

    tempBg.value = selectedCityWeather;
  } else {
    console.log('Failed the test');
  }
};

onMounted(getWeather);

const backgroundUrl = computed(() => {
  const weatherCondition = store.state.weatherCondition.toLowerCase(); // Convert to lower case to match the cases
  let imageUrl;

  switch (true) {
    case weatherCondition.includes('stormy' || 'thunder' || 'thundery'):
      imageUrl = stormy;
      break;
    case weatherCondition.includes('clear'):
      imageUrl = clear;
      break;

    case weatherCondition.includes('sunny'):
      imageUrl = sunny;
      break;

    case weatherCondition.includes('light' || 'rain'):
      imageUrl = lightRain;
      break;
    case weatherCondition.includes('overcast'):
      imageUrl = overcast;
      break;

    case weatherCondition.includes('cloudy'):
      imageUrl = cloudy;
      break;
    // Add more cases as needed
    default:
      imageUrl = clear; // Default background if no match
  }

  return imageUrl;
});
</script>

<template>
  <div
    :style="{
      background: 'url(' + backgroundUrl + ') repeat center center',
      'background-size': 'cover',
      width: '100%',
      height: '100vh'
    }"
    class="background1"
    v-if="store.state.loading"
  >
    <div class="glass-container">
      <HomeViewVue />
    </div>
  </div>
  <div v-else class="loading">
    <div class="loader"></div>
  </div>
</template>
<!--
background: url('./assets/weatherBg/stormy.jpg') repeat center center;
  background-size: cover; -->

<style scoped>
.background1 {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-container {
  position: absolute;
  background: url('') no-repeat center center fixed;
  background-size: 100vh;
  background-color: rgba(30, 29, 29, 0.416); /* You can adjust the opacity */
  border-radius: 10px;

  width: 100%;
  height: 100vh;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #23222c;
  margin: 0;
}
.loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top: 5px solid;
  animation:
    spin 1s linear infinite,
    rainbow 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rainbow {
  0% {
    border-top-color: red;
  }
  14% {
    border-top-color: orange;
  }
  28% {
    border-top-color: yellow;
  }
  42% {
    border-top-color: green;
  }
  57% {
    border-top-color: blue;
  }
  71% {
    border-top-color: indigo;
  }
  85% {
    border-top-color: violet;
  }
  100% {
    border-top-color: red;
  }
}

/* For large tablets and smaller laptops */
@media (max-width: 1200px) {
  .glass-container {
    background-size: 90vh; /* Slightly reduce the background size */
  }

  .loader {
    width: 40px;
    height: 40px; /* Slightly reduce the loader size */
  }
}

/* For standard tablets and mobile landscape */
@media (max-width: 768px) {
  .glass-container {
    background-size: 80vh; /* Further reduce the background size */
    border-radius: 8px; /* Adjust the border radius */
  }

  .loader {
    width: 35px;
    height: 35px; /* Further reduce the loader size */
  }
}

/* For mobile devices in portrait orientation */
@media (max-width: 576px) {
  .glass-container {
    background-size: 70vh; /* Further reduce the background size for small screens */
    border-radius: 5px; /* Adjust the border radius for small screens */
  }

  .loader {
    width: 30px;
    height: 30px; /* Reduce the loader size for small screens */
  }
}
</style>
