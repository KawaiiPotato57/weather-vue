<template>
    <div style="padding:30px">
      <h1 style="font-size:55px; font-weight:200">{{ props.temperature }} &deg;</h1>
      <p style="font-size:13px; font-weight:500">{{ props.city }}</p>
      <div class="line-container">
        <div class="line" :style="{ width: props.line1Length + 'px', backgroundColor: props.lineColor }"></div>
        <div class="line" :style="{ width: props.line2Length + 'px', backgroundColor: props.lineColor }"></div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps({
    temperature: String,
    city: String,
    line1Length: Number,
    line2Length: Number,
    lineColor: String
  });
  </script>

  <style scoped>
  .line-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top:15px;
  }

  .line {
    height: 3px;
    margin-bottom: 5px;
  }
  </style>
