<template>
  <div class="forecastContainer">
    <h4>Weather Forecast</h4>
    <h1>
      {{ props.cityDataArr?.[5] || 'Light Rain' }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cityDataArr: Array
});
</script>

<style scoped>
.forecastContainer {
  color: rgb(231, 231, 231);
}
h1 {
  font-size: 45px;
  font-weight: 500;
  padding-top: 30px;
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .forecastContainer {
    color: rgb(237, 235, 235);
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
    padding-top: 25px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .forecastContainer {
    color: rgb(237, 235, 235);
  }
  h1 {
    font-size: 35px;
    font-weight: 500;
    padding-top: 20px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .forecastContainer {
    color: rgb(237, 235, 235);
  }
  h1 {
    font-size: 30px;
    font-weight: 400;
    padding-top: 18px;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .forecastContainer {
    color: rgb(237, 235, 235);
  }
  h1 {
    font-size: 27px;
    font-weight: 400;
    padding-top: 15px;
  }
}
</style>
