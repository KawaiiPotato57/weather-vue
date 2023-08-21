<template>
  <div class="sideChartContainer">
    <!-- <LineChart :chart-data="chartData" :options="options"></LineChart> -->
    <LineChart
      :chart-data="chartData"
      :options="options"
      :width="widthRef"
      :height="heightRef"
      :max-height="maxHeightRef"
      :max-width="maxWidthRef"
      :border="borderRef"
    ></LineChart>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LineChart from './LineChart.vue';
const heightRef = ref('1');
const widthRef = ref('5');
const maxWidthRef = ref('120%');
const maxHeightRef = ref('210px');
const borderRef = ref('none');

const chartData = {
  labels: ['-10', '-5', '0', '5', '10', '15', '20', '25'],
  datasets: [
    {
      label: 'Data One',
      borderColor: 'lightYellow',
      // Corresponding data points for '1 am', '11 am', '1 pm', '11 pm'
      data: [0, 0.7, 1.1, 2.4, 2, 1.6, 2.3, 1, 2.8, 3.7, 1.7, 1.5],
      fill: true,
      tension: 0.4
    }
  ]
};

const options = {
  plugins: {
    datalabels: {
      align: 'end', // Align labels to the end of the anchor point
      anchor: 'end', // Anchor labels to the end of the anchor point
      offset: 5, // Offset the labels slightly above the points
      color: 'white', // Set the color of the labels
      formatter: function (value: number) {
        return value + '*C';
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      display: false,
      ticks: {
        // Define the maximum value, assuming 3 corresponds to "11 pm"
        color: '#DFF3E4',
        max: 4,
        // Define how many steps between ticks
        stepSize: 1,
        // Define custom tick labels
        callback: function (value: number) {
          const labels = ['1 am', '11 am', '1 pm', '11 pm'];
          return labels[value];
        }
      }
    },
    x: {
      display: false,
      ticks: {
        color: '#DFF3E4'
      }
    }
  }
};
</script>

<style scoped>
.sideChartContainer {
  padding: 20px;
}
</style>
