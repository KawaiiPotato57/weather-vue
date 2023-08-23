<!-- <template>
  <div>
    <canvas
      class="sample"
      :style="{ 'max-width': props.maxWidth, 'max-height': props.maxHeight, border: props.border }"
      ref="canvas"
      :width="props.width"
      :height="props.height"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch, onUpdated } from 'vue';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin
import { useStore } from 'vuex';
const store = useStore();

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
); // Register the plugin

const canvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;

const props = defineProps({
  chartData: Object,
  options: Object,
  width: String,
  height: String,
  maxWidth: String,
  maxHeight: String,
  border: String
});

const formatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short'
});

const dates = Array.from({ length: 4 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  return formatter.format(date);
});

const avgTempsComputed = computed(() => {
  return store.getters.forecastTemps;
});

const chartData1 = computed(() => ({
  labels: dates,
  datasets: [
    {
      label: 'Data One',
      borderColor: 'lightYellow',
      data: avgTempsComputed.value,
      fill: true,
      tension: 0.4
    }
  ]
}));
watch(
  avgTempsComputed,
  () => {
    if (chartInstance) {
      chartInstance.data.datasets[0].data = avgTempsComputed.value;
      chartInstance.update();
    }
  },
  { deep: true }
);
// watch(
//   avgTempsComputed,
//   () => {
//     if (chartInstance) {
//       chartInstance.data.datasets[0].data = avgTempsComputed.value;
//       chartInstance.update();
//     }
//   },
//   { deep: true }
// );

onMounted(() => {
  if (!canvas.value) return;

  const ctx = canvas.value.getContext('2d')!;
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: chartData1.value,
    options: props.options
  });
});

// onUpdated(() => {
//   // Destroy previous instance
//   chartInstance.value?.destroy();

//   if (!canvas.value) return;
//   const ctx = canvas.value.getContext('2d')!;
//   chartInstance.value = new Chart(ctx, {
//     type: 'line',
//     data: chartData1.value,
//     options: props.options
//   });
// });
</script>

<style scoped>
.sample {
  background-color: transparent;
  padding: 20px;
  padding-bottom: 10px;
  border-radius: 20px;
}
</style> -->

<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, computed, ComputedRef } from 'vue';
import * as echarts from 'echarts';
import { useStore } from 'vuex';

const props = defineProps({
  width: String,
  height: String,
  maxWidth: String,
  maxHeight: String,
  border: String
});
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
// let avgTempsComputed: ComputedRef<any> | null = null;
let fetchOlala: ComputedRef<any> | null = null;

// if (store.state.loading) {
//   avgTempsComputed = computed(() => {
//     return store.getters.forecastTemps;
//   });
// }
if (store.state.loading) {
  fetchOlala = computed(() => {
    const forecastRes = store.state.foreCast;
    const forecastData = forecastRes.forecast;
    console.log('Forecast in New Computed: ', forecastRes.forecast);

    const temperatures = forecastData.forecastday.map((dayObject) => dayObject.day.avgtemp_c);
    temperatures.push(Math.floor(Math.random() * (34 - 20 + 1) + 20));
    const finalArr = temperatures.map((item) => parseInt(item));
    console.log('Temperatures in getters: ', finalArr);
    return finalArr;
  });
}
const chartOptions = computed(() => ({
  xAxis: {
    type: 'category',
    data: dates
  },
  yAxis: {
    type: 'value',
    interval: 10,
    splitLine: {
      show: false // Hide horizontal grid lines
    }
  },
  series: [
    {
      data: fetchOlala.value,
      type: 'line',
      areaStyle: { color: 'rgba(255,255,224,0.2)' },
      smooth: true
    }
  ]
}));

watch(fetchOlala, () => {
  if (chartInstance) {
    chartInstance.setOption({
      series: [
        {
          data: fetchOlala.value
        }
      ]
    });
  }
});

onMounted(() => {
  if (chartContainer.value) {
    chartInstance = echarts.init(chartContainer.value);
    chartInstance.setOption(chartOptions.value);
    chartInstance.resize({
      width: props.maxWidth,
      height: props.maxHeight
    });
  }
});
</script>

<style scoped>
.chart-container {
  background-color: transparent;

  border-radius: 20px;
}
</style>
