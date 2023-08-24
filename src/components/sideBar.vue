<template>
  <div class="sidebar">
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

<style scoped>
.sideBar {
  padding: 10px;
  width: 25%;
  border-right: 4px solid #afafaf67;
  border-radius: 5px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.26);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Custom styling for the scrollbar here */

/* Media query for small screens (e.g., below 768px) */
@media (max-width: 768px) {
  .sideBar {
    width: 100%; /* Take up the full width on small screens */
    height: auto; /* Allow the height to be determined by content */
    border-right: none; /* Remove the right border on small screens */
  }
}
</style>
