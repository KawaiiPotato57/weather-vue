<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, computed, type ComputedRef } from 'vue';
import * as echarts from 'echarts';
import { useStore } from 'vuex';
const widthRef = ref('');
const heightRef = ref('');
const props = defineProps({
  width: {
    type: [String, Number],
    default: 'auto' // Optional default value
  },
  height: {
    type: [String, Number],
    default: 'auto' // Optional default value
  },
  maxWidth: String,
  maxHeight: String,
  border: String
});
widthRef.value = props.maxWidth;
heightRef.value = props.maxHeight;
const store = useStore();

const chartContainer = ref<HTMLElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

const formatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short'
});

const dates = Array.from({ length: 4 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  return formatter.format(date);
});
let fetchOlala: ComputedRef<any> | null = null;

if (store.state.loading) {
  fetchOlala = computed(() => {
    const forecastRes = store.state.foreCast;
    const forecastData = forecastRes.forecast;
    console.log('Forecast in New Computed: ', forecastRes.forecast);

    const temperatures = forecastData.forecastday.map(
      (dayObject: { day: { avgtemp_c: any } }) => dayObject.day.avgtemp_c
    );
    temperatures.push(Math.floor(Math.random() * (34 - 20 + 1) + 20));
    const finalArr = temperatures.map((item: string) => parseInt(item));
    console.log('Temperatures in getters: ', finalArr);
    return finalArr;
  });
}
const chartOptions = computed(() => ({
  xAxis: {
    type: 'category',
    axisLabel: {
      textStyle: {
        color: 'black'
      }
    },
    data: dates
  },
  yAxis: {
    type: 'value',
    interval: 10,
    axisLabel: {
      textStyle: {
        color: 'black'
      }
    },
    splitLine: {
      show: false // Hide horizontal grid lines
    }
  },
  series: [
    {
      data: fetchOlala?.value,
      type: 'line',
      areaStyle: { color: 'rgba(255,255,224,0.2)' },
      smooth: true
    }
  ]
}));
if (fetchOlala) {
  watch(fetchOlala, () => {
    if (chartInstance) {
      chartInstance.setOption({
        series: [
          {
            data: fetchOlala?.value
          }
        ]
      });
    }
  });
}

watch(
  () => props.maxWidth,
  (newMaxWidth) => {
    widthRef.value = newMaxWidth;

    resizeChart();
  }
);

// Watch maxHeight prop
watch(
  () => props.maxHeight,
  (newMaxHeight) => {
    heightRef.value = newMaxHeight;
    resizeChart();
  }
);

function resizeChart() {
  if (chartInstance) {
    console.log('HERE IN RESIZE');
    console.log('Height: ', heightRef.value);
    console.log('WIdth: ', widthRef.value);

    chartInstance.resize({
      width: widthRef.value,
      height: heightRef.value
    });
  }
}
onMounted(() => {
  if (chartContainer.value) {
    chartInstance = echarts.init(chartContainer.value);
    chartInstance.setOption(chartOptions.value);
    resizeChart();
  }
});
</script>

<style scoped>
.chart-container {
  background-color: rgba(130, 130, 130, 0.358);

  border-radius: 20px;
}
</style>
