<template>
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
import { onMounted, ref } from 'vue';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
); // Register the plugin

const canvas = ref<HTMLCanvasElement | null>(null);

const props = defineProps({
  chartData: Object,
  options: Object,
  width: String,
  height: String,
  maxWidth: String,
  maxHeight: String,
  border: String,
});

onMounted(() => {
  if (!canvas.value) return;

  const ctx = canvas.value.getContext('2d')!;
  new Chart(ctx, {
    type: 'line',
    data: props.chartData,
    options: props.options
  });
});
</script>

<style scoped>
.sample {
  background-color: transparent;

  padding: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
}
</style>
