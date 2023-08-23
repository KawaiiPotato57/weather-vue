<template>
  <div class="mainContainer">
    <foreCastMainVue :cityDataArr="cityDataArr" />
    <ForeCastDetailsMain :temp="cityDataArr[1]" />
    <ChartMain />
    <div class="citiesCards">
      <tempCardsMainVue
        v-for="item in cityDetails"
        :key="item.name"
        :temperature="item.temperature"
        :city="item.name"
        :line1Length="item.line1Length"
        :line2Length="item.line2Length"
        :lineColor="item.lineColor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartMain from './chartMain.vue';
import ForeCastDetailsMain from './foreCastDetailsMain.vue';
import foreCastMainVue from './foreCastMain.vue';
import tempCardsMainVue from './tempCardsMain.vue';
import cities from './citiesData';
import { defineProps, ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const citiesAll = ref({});
citiesAll.value = store.state.weather;
const props = defineProps({
  cityDataArr: []
});
const cityDetails = computed(() => {
  return Object.values(citiesAll.value).map((city) => ({
    name: city.location.name,
    temperature: city.current.temp_c,
    line1Length: Math.floor(Math.random() * 100),
    line2Length: Math.floor(Math.random() * 100),
    lineColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`
  }));
});
</script>

<style scoped>
.mainContainer {
  padding: 20px;
}
.citiesCards {
  display: flex;
  flex-direction: row;
  gap: 75px;
}
</style>
