<script setup lang="ts">
import HomeViewVue from './views/HomeView.vue';
import { useStore } from 'vuex';
import { onMounted, onBeforeMount, ref } from 'vue';

const store = useStore();

const getWeather = () => {
  store.dispatch('fetchWeather').then((data: {}) => {});
};

onBeforeMount(() => {
  getWeather();
});
</script>

<template>
  <div v-if="store.state.loading" class="background">
    <div class="glass-container">
      <HomeViewVue />
    </div>
  </div>
  <div v-else class="loading">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.background {
  background: url('./assets/weatherBg/stormy.jpg') repeat center center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-container {
  position: absolute;
  background: url('./assets/weatherBg/stormy.jpgjpg') no-repeat center center fixed;
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
</style>
