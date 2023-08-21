<script setup lang="ts">
import HomeViewVue from "./views/HomeView.vue";

</script>

<template>
  <div class="background">
    <div class="glass-container">
      <HomeViewVue/>
    </div>
  </div>
</template>

<style scoped>
.background {
  background: url('./assets/weatherBg/stormy.jpg') repeat center center ;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-container {
  position:absolute;
  background: url('./assets/weatherBg/stormy.jpgjpg') no-repeat center center fixed;
  background-size: 100vh;
  background-color: rgba(30, 29, 29, 0.416); /* You can adjust the opacity */
  border-radius: 10px;

  width: 100%;
  height: 100vh;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

</style>
