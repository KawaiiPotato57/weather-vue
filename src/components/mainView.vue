<template>
  <div class="mainContainer">
    <foreCastMainVue :cityDataArr="props.cityDataArr" />
    <ForeCastDetailsMain :temp="props.cityDataArr?.[1]" :icon="props.cityDataArr?.[6]" />
    <ChartMain />

    <div class="tempCardContainer">
      <div class="citiesCards">
        <div class="cardWrapper" v-for="item in cityDetails" :key="item.name">
          <tempCardsMainVue
            :temperature="item.temperature"
            :city="item.name"
            :line1Length="item.line1Length"
            :line2Length="item.line2Length"
            :lineColor="item.lineColor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartMain from './chartMain.vue';
import ForeCastDetailsMain from './foreCastDetailsMain.vue';
import foreCastMainVue from './foreCastMain.vue';
import tempCardsMainVue from './tempCardsMain.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
interface Weather {
  location: {
    name: string;
  };
  current: {
    temp_c: string;
  };
}
const store = useStore();

const citiesAll = ref({} as Record<string, Weather>); // specify the type here
citiesAll.value = store.state.weather;
const props = defineProps({
  cityDataArr: Array as () => string[]
});
const cityDetails = computed(() => {
  return Object.values(citiesAll.value).map((city: Weather) => ({
    // and here
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
  flex-wrap: wrap;
  gap: 75px;
}

.cardWrapper {
  /* This will make each card take up half the width minus the gap */
}

@media (max-width: 1200px) {
  .mainContainer {
    padding: 18px;
  }
  .citiesCards {
    gap: 60px;
  }
  .cardWrapper {
    flex: 1 1 calc(50% - 60px); /* Adjusting the width for responsive design */
  }
}
</style>
