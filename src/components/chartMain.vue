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
import { ref, computed, onUnmounted, onBeforeMount } from 'vue';
import LineChart from './LineChart.vue';

const loading = computed(() => {
  console.log('Check in loading');

  return store.state.foreCastLoading;
});
import { useStore } from 'vuex';
const store = useStore();
const avgTemps = ref([]);
console.log('DROWN Side:', avgTemps.value);

console.log('CAN YOU FEEL MY HEART:', avgTemps.value);
const heightRef = ref('1');
const maxWidthRef = ref('');
const maxHeightRef = ref('');
const borderRef = ref('none');
// const width = ref(window.innerWidth);
function resizeHandler() {
  const width = window.innerWidth;
  if (width <= 490) {
    maxWidthRef.value = '300px';
    maxHeightRef.value = '270px';
  } else if (width <= 510) {
    maxWidthRef.value = '400px';
    maxHeightRef.value = '270px';
  } else if (width <= 750) {
    maxWidthRef.value = '500px';
    maxHeightRef.value = '270px';
  } else if (width <= 792) {
    maxWidthRef.value = '700px';
    maxHeightRef.value = '270px';
  } else if (width <= 1024) {
    maxWidthRef.value = '350px';
    maxHeightRef.value = '270px';
  } else if (width <= 1025) {
    maxWidthRef.value = '500px';
    maxHeightRef.value = '270px';
  } else if (width <= 1130) {
    maxWidthRef.value = '500px';
    maxHeightRef.value = '270px';
  } else if (width <= 1230) {
    maxWidthRef.value = '500px';
    maxHeightRef.value = '270px';
  } else if (width <= 1330) {
    maxWidthRef.value = '800px';
    maxHeightRef.value = '270px';
  } else if (width <= 1430) {
    maxWidthRef.value = '800px';
    maxHeightRef.value = '270px';
  } else if (width <= 1530) {
    maxWidthRef.value = '1000px';
    maxHeightRef.value = '270px';
  } else {
    maxWidthRef.value = '1150px';
    maxHeightRef.value = '270px';
  }
}

onBeforeMount(() => {
  window.addEventListener('resize', resizeHandler);
  resizeHandler(); // Call it once to set the initial values based on the current viewport size
});
onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<style scoped>
.sideChartContainer {
  padding: 10px;
  margin: 0px;
}
</style>
