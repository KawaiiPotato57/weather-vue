<template>
  <div class="mainContainer">
    <foreCastMainVue />
    <ForeCastDetailsMain />
    <ChartMain />
    <div class="citiesCards">
      <tempCardsMainVue
        v-for="item in cities"
        :key="item.city"
        :temperature="item.temperature"
        :city="item.city"
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
