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
import { ref, computed } from 'vue';
import LineChart from './LineChart.vue';
import { useStore } from 'vuex';
const store = useStore();

const loading = computed(() => {
  console.log('Check in loading');

  return store.state.foreCastLoading;
});

const heightRef = ref('1');
const maxWidthRef = ref('340px');
const maxHeightRef = ref('240px');
const borderRef = ref('2px solid rgb(55, 55, 55)');
</script>

<style scoped>
.sideChartContainer {
  padding: 10px;
  margin: 10px;
}
</style>
