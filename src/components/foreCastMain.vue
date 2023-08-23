<template>
  <div class="forecastContainer">
    <h4>Weather Forecast</h4>
    <h1 style="font-size: 45px; font-weight: 500; padding-top: 30px">
      {{ props.cityDataArr[5] || 'Light Rain' }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import defineProps from 'vue';

const props = defineProps({
  cityDataArr: []
});
</script>

<style scoped>
.forecastContainer {
  color: rgb(231, 231, 231);
}
</style>
