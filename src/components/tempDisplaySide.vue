<template>
  <div class="displayContainer">
    <div style="display: flex; flex-direction: row; align-items: center">
      <h1 style="font-size: 60px; font-weight: 200">{{ props.cityDataArr[1] || '00' }}&deg;C</h1>
      <p style="padding-top: 35px; margin: 0 30px 30px; font-size: 40px; font-weight: 200">+/-</p>
      <h1 style="font-size: 60px; font-weight: 200">
        {{ Math.floor(Math.random() * (4 - 2 + 1) + 2) }}
      </h1>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 80%;
      "
    >
      <p style="font-size: 25px; font-weight: 200">
        UV: <span style="font-size: 40px; font-weight: 400">{{ props.cityDataArr[4] || "2" }}</span>
      </p>

      <p>Wind: {{ props.cityDataArr[2] ||"WSW"}} {{ props.cityDataArr[3] ||"3.1" }} mph</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  cityDataArr: []
});
</script>

<style scoped>
.displayContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 2px rgba(255, 255, 255, 0.078);
  padding-bottom: 10px;
  margin-left: 15px;
  width: 90%;
}
</style>
