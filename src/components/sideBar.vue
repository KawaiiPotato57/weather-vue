<template>
  <div>
    <searchBarVue />
    <tempDisplaySideVue :cityDataArr="props.cityDataArr" />
    <intensityDisplayVue />
    <sideChartVue />
    <cityInfoVue :cityName="props.cityDataArr[0]" />
  </div>
</template>

<script setup lang="ts">
import cityInfoVue from './cityInfo.vue';
import intensityDisplayVue from './intensityDisplay.vue';
import searchBarVue from './searchBar.vue';
import sideChartVue from './sideChart.vue';
import tempDisplaySideVue from './tempDisplaySide.vue';
import defineProps from 'vue';

const props = defineProps({
  cityDataArr: []
});
console.log('The city name ', props.cityDataArr[0]);
// console.log('The Sidebar', cityData.value.location.name);
</script>

<style scoped></style>
