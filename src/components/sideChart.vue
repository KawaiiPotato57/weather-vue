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
import { ref, computed, onBeforeMount, onUnmounted } from 'vue';
import LineChart from './LineChart.vue';
import { useStore } from 'vuex';
const store = useStore();

const loading = computed(() => {
  return store.state.foreCastLoading;
});

const heightRef = ref('1');

const borderRef = ref('2px solid rgb(55, 55, 55)');

const maxWidthRef = ref('');
const maxHeightRef = ref('');

// const width = ref(window.innerWidth);
function resizeHandler() {
  const width = window.innerWidth;
  if (width <= 320) {
    maxWidthRef.value = '280px';
    maxHeightRef.value = '220px';
  } else if (width <= 490) {
    maxWidthRef.value = '340px';
    maxHeightRef.value = '240px';
  } else if (width <= 510) {
    maxWidthRef.value = '400px';
    maxHeightRef.value = '240px';
  } else if (width <= 770) {
    maxWidthRef.value = '400px';
    maxHeightRef.value = '240px';
  } else {
    maxWidthRef.value = '340px';
    maxHeightRef.value = '240px';
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
  margin: 10px;
}
</style>
