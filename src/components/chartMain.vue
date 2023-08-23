<template>
  <div v-if="loading" class="sideChartContainer">
    <LineChart
      :width="heightRef"
      :height="heightRef"
      :max-height="maxHeightRef"
      :max-width="maxWidthRef"
      :border="borderRef"
    ></LineChart>
  </div>

  <div v-else>OALALA</div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
import LineChart from './LineChart.vue';
// const props = defineProps({
//   avgTemps: []
// });
const loading = computed(() => {
  console.log('Check in loading');

  return store.state.foreCastLoading;
});
import { useStore } from 'vuex';
const store = useStore();
const avgTemps = ref([]);

// const getTemps = () => {
//   const forecastRes = store.state.foreCast;
//   const forecastData = forecastRes.forecast;

//   const temperatures = forecastData.forecastday.map((dayObject) => dayObject.day.avgtemp_c);
//   temperatures.push(Math.floor(Math.random() * (34 - 20 + 1) + 20)); // Add a dummy value at the end
//   console.log('Computed here');
//   return temperatures;
// };
// const avgTempsComputed = computed(() => {
//   // const forecastData = store.state.foreCast.forecast;
//   const forecastRes = store.state.foreCast;
//   const forecastData = forecastRes.forecast;

//   const temperatures = forecastData.forecastday.map((dayObject) => dayObject.day.avgtemp_c);
//   temperatures.push(Math.floor(Math.random() * (34 - 20 + 1) + 20)); // Add a dummy value at the end
//   console.log('Computed here');
//   return temperatures;
// });
// const avgTempsComputed = computed(() => {
//   return store.getters.forecastTemps;
// });
// avgTemps.value.push(store.getters.forecastTemps);
// avgTemps.value.push(avgTemps.value[0].map(Number));
console.log('DROWN Side:', avgTemps.value);

console.log('CAN YOU FEEL MY HEART:', avgTemps.value);
const heightRef = ref('1');
const widthRef = ref('5');
const maxWidthRef = ref('1100px');
const maxHeightRef = ref('270px');
const borderRef = ref('none');
const formatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short'
});
const dates = Array.from({ length: 4 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  return formatter.format(date);
});
</script>

<style scoped>
.sideChartContainer {
  padding: 20px;
}
</style>
