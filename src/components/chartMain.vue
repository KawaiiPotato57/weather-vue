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
import { ref,  computed } from 'vue';
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
const maxWidthRef = ref('1150px');
const maxHeightRef = ref('270px');
const borderRef = ref('none');

</script>

<style scoped>
.sideChartContainer {
  padding: 10px;
  margin: 0px;
}
</style>
